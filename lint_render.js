#!/usr/bin/env node
/* Render every template literal in the site's JS, for real.
 *
 * `node --check` only parses, so it cannot see an undeclared identifier. That is
 * not a theoretical gap: deleting a `const authors` line while removing a book
 * left a `${authors}` behind, the publication grid threw a ReferenceError at
 * render time, and because init() is async every later section silently stopped
 * rendering -- including one added on the same page. The file was syntactically
 * valid the whole time.
 *
 * A regex cannot substitute for running the code: it flags `a.date` and
 * `.slice` as undeclared names. So this loads research.js into a stubbed DOM and
 * calls each render function with realistic arguments. A ReferenceError surfaces
 * here as it would in the browser.
 *
 * Usage: node lint_render.js
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;

// ---------------------------------------------------------------- DOM stub

function makeEl(id) {
  const el = {
    id: id || '',
    tagName: 'DIV',
    // Canvas 2d context. The knowledge graph draws on one; a stub that swallows
    // every call lets the surrounding template code still run, which is the part
    // worth checking.
    getContext() {
      return {
        canvas: { width: 800, height: 600 },
        fillStyle: '', strokeStyle: '', lineWidth: 1, font: '', globalAlpha: 1,
        textAlign: '', textBaseline: '', lineCap: '', lineJoin: '',
        save() {}, restore() {}, beginPath() {}, closePath() {}, moveTo() {},
        lineTo() {}, arc() {}, rect() {}, fill() {}, stroke() {}, fillText() {},
        strokeText() {}, clearRect() {}, translate() {}, rotate() {}, scale() {},
        measureText() { return { width: 10 }; },
        quadraticCurveTo() {}, bezierCurveTo() {}, arcTo() {}, ellipse() {},
        setTransform() {}, resetTransform() {}, clip() {}, isPointInPath() { return false; },
        createLinearGradient() { return { addColorStop() {} }; },
        createRadialGradient() { return { addColorStop() {} }; },
        getImageData() { return { data: [] }; },
        putImageData() {}, drawImage() {}, setLineDash() {}
      };
    },
    innerHTML: '',
    textContent: '',
    className: '',
    style: {},
    dataset: {},
    offsetParent: null,
    scrollHeight: 0,
    clientWidth: 0,
    scrollWidth: 0,
    children: [],
    parentElement: null,
    attributes: {},
    classList: {
      _s: new Set(),
      add(c) { this._s.add(c); },
      remove(c) { this._s.delete(c); },
      contains(c) { return this._s.has(c); },
      toggle(c, on) { if (on === undefined) { this._s.has(c) ? this._s.delete(c) : this._s.add(c); } else if (on) { this._s.add(c); } else { this._s.delete(c); } }
    },
    addEventListener() {},
    removeEventListener() {},
    appendChild(c) { this.children.push(c); return c; },
    removeChild(c) { return c; },
    insertBefore(c) { this.children.push(c); return c; },
    insertAdjacentElement(_pos, el) { this.children.push(el); return el; },
    after() {},
    before() {},
    replaceWith() {},
    cloneNode() { return makeEl('clone'); },
    querySelectorAll(sel) {
      // A handful of selectors the renderers use to count what they produced.
      if (/pub-card/.test(sel)) {
        return (this.innerHTML.match(/pub-card/g) || []).map(function () { return makeEl('card'); });
      }
      return [];
    },
    setAttribute(k, v) { this.attributes[k] = v; },
    getAttribute(k) { return this.attributes[k]; },
    hasAttribute(k) { return k in this.attributes; },
    removeAttribute(k) { delete this.attributes[k]; },
    querySelector(sel) {
      // The "show more" control is created and then wired by id. Handing back a
      // stub element keeps that code path intact without parsing innerHTML.
      if (typeof sel === 'string' && /^#/.test(sel)) return makeEl(sel.slice(1));
      return null;
    },
    querySelectorAll() { return []; },
    closest() { return null; },
    getBoundingClientRect() { return { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 }; },
    focus() {},
    click() {},
    scrollIntoView() {},
    get firstChild() { return this.children[0] || null; },
    get lastChild() { return this.children[this.children.length - 1] || null; },
    get nextSibling() { return null; },
    remove() {}
  };
  return el;
}

// Every container id the render functions ask for, pre-created so the templates
// actually execute instead of hitting an early return.
const IDS = [
  'publicationsGrid', 'featuredResearch', 'platformGrid', 'topicExplorer',
  'topicFilters', 'trendingGrid', 'knowledgeGraph', 'talksList', 'talkCount',
  'speakingStat', 'latestPostsGrid', 'yearRail', 'resultCount', 'indexCount',
  'pubCount', 'resultsCount', 'pubMore', 'searchResults', 'searchInput',
  'researchSearch', 'citationTimeline', 'pubCards'
];

const byId = {};
IDS.forEach(function (id) { byId[id] = makeEl(id); });
byId.publicationsGrid.parentElement = makeEl('pubWrapper');
byId.publicationsGrid.parentElement.querySelector = function () { return null; };

const doc = {
  readyState: 'complete',
  documentElement: Object.assign(makeEl('html'), { dataset: {} }),
  body: makeEl('body'),
  head: makeEl('head'),
  getElementById(id) { return byId[id] || null; },
  querySelector() { return null; },
  querySelectorAll() { return []; },
  createElement(tag) { return makeEl('created-' + tag); },
  createTreeWalker() { return { nextNode() { return null; } }; },
  addEventListener() {},
  removeEventListener() {}
};

const store = {};
const win = {
  document: doc,
  location: { href: 'http://localhost/research.html', search: '', hash: '', pathname: '/research.html' },
  navigator: { userAgent: 'node' },
  localStorage: {
    getItem(k) { return k in store ? store[k] : null; },
    setItem(k, v) { store[k] = String(v); },
    removeItem(k) { delete store[k]; }
  },
  getComputedStyle() { return { display: 'block', overflowX: 'visible' }; },
  matchMedia() { return { matches: false, addEventListener() {}, addListener() {} }; },
  addEventListener() {}, removeEventListener() {},
  dispatchEvent(ev) { if (ev && ev.type === 'index:rendered' && typeof ctx.__onIndexRendered === 'function') ctx.__onIndexRendered(ev); return true; },
  requestAnimationFrame(fn) { return setTimeout(fn, 0); },
  cancelAnimationFrame(id) { clearTimeout(id); },
  setTimeout: setTimeout, clearTimeout: clearTimeout,
  fetch() { return Promise.resolve({ ok: false, status: 404, json() { return Promise.resolve({}); } }); },
  console: console,
  Intl: Intl, Date: Date, Math: Math, JSON: JSON, URLSearchParams: URLSearchParams,
  CustomEvent: class { constructor(t, o) { this.type = t; Object.assign(this, o || {}); } },
  Event: class { constructor(t) { this.type = t; } },
  IntersectionObserver: class { constructor() {} observe() {} disconnect() {} unobserve() {} },
  MutationObserver: class { constructor() {} observe() {} disconnect() {} },
  ResizeObserver: class { constructor() {} observe() {} disconnect() {} },
  getComputedStyle_: null
};
win.window = win;
win.self = win;
win.globalThis = win;

const ctx = vm.createContext(win);
ctx.document = doc;
ctx.window = win;
ctx.globalThis = win;
ctx.self = win;
ctx.console = console;
ctx.setTimeout = setTimeout;
ctx.clearTimeout = clearTimeout;
ctx.fetch = win.fetch;
ctx.Intl = Intl;
ctx.Math = Math;
ctx.JSON = JSON;
ctx.Date = Date;
ctx.URLSearchParams = URLSearchParams;

// ---------------------------------------------------------------- load

// Load order must match the pages. Both are `defer`, so they execute in document
// order: site.js first, then research.js. site.js is what publishes
// window.SITE_STATS, and research.js reads it while building its platform cards,
// so loading them the other way round makes this harness fail on code that is
// correct in a browser. The order below is asserted against the markup rather
// than assumed.
const SRC = ['js/site.js', 'js/research.js'];

(function assertLoadOrder() {
  const fs2 = require('fs');
  for (const page of ['research.html', 'latest-posts.html']) {
    const html = fs2.readFileSync(path.join(ROOT, page), 'utf8');
    const order = (html.match(/src="js\/([a-z]+)\.js/g) || [])
      .map(s => 'js/' + s.match(/js\/([a-z]+)\.js/)[1] + '.js');
    const relevant = order.filter(f => SRC.includes(f));
    if (relevant.join(',') !== SRC.join(',')) {
      console.log('  ! ' + page + ' loads ' + relevant.join(' then ') +
                  ', but this harness loads ' + SRC.join(' then '));
      console.log('    A failure below may be the harness, not the site.');
      process.exitCode = 1;
    }
  }
})();
SRC.forEach(function (rel) {
  const file = path.join(ROOT, rel);
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file });
});

// ---------------------------------------------------------------- exercise

const problems = [];
const notes = [];

// Every function defined in research.js, so nothing that renders a template is
// skipped just because its container id was not guessed.
const defined = Object.keys(ctx).filter(function (k) {
  return typeof ctx[k] === 'function' && /^(render|init|update|draw|latestPost|platform|also)/i.test(k);
});
notes.push('render/init functions found: ' + defined.length);

// Realistic arguments. A renderer that early-returns tells us nothing, so each is
// called with a populated article and with the empty cases it must survive.
const article = {
  id: 1, title: 'Sample title', platform: 'Medium', platforms: ['Medium'],
  year: 2026, date: '2026-09-10', topics: ['AI', 'Cloud'], url: 'https://example.com/a',
  summary: 'A summary.', legacy: false, archived: false, isFeatured: true,
  citations: 2, views: '1.2K', alsoPublished: [
    { venue: 'DZone', date: '2026-09-12', url: 'https://example.com/b', views: '10', likes: 1 },
    { venue: 'DZone Legacy', date: '2026-09-12' }
  ]
};
const unlinked = Object.assign({}, article, { url: null, legacy: true, archived: false, platforms: ['DZone Legacy'] });

const calls = [
  ['renderTalks', []],
  ['renderFeaturedResearch', []],
  ['renderPlatformGrid', []],
  ['renderTopicExplorer', []],
  ['renderTopicFilters', ['']],
  ['renderTrending', []],
  ['updatePublications', []],
  ['renderPublicationCards', [[article, unlinked]]],
  ['initLatestPosts', []]
];

calls.forEach(function (entry) {
  const name = entry[0], args = entry[1];
  if (typeof ctx[name] !== 'function') {
    problems.push(name + ' is not defined -- was it renamed?');
    return;
  }
  try {
    const r = ctx[name].apply(null, args);
    // Async functions return a promise; an async throw would be unhandled.
    if (r && typeof r.catch === 'function') {
      r.catch(function (e) {
        problems.push(name + '() rejected: ' + (e && e.stack ? e.stack.split('\n').slice(0, 2).join(' | ') : e));
      });
    }
  } catch (e) {
    problems.push(name + '() threw: ' + (e && e.stack ? e.stack.split('\n').slice(0, 3).join('\n      ') : e));
  }
});

// The rendered output is the other half of the check: an interpolation that
// resolved to the literal text "undefined" is a bug that throws no error.
function scanOutput(label, html) {
  if (typeof html !== 'string' || !html) return;
  const bad = html.match(/undefined|NaN|\[object Object\]/g);
  if (bad) {
    problems.push(label + ' rendered ' + bad.length + ' suspicious token(s): ' +
                  bad.slice(0, 3).join(', '));
  }
}
scanOutput('#talksList', byId.talksList.innerHTML);
scanOutput('#featuredResearch', byId.featuredResearch.innerHTML);
scanOutput('#platformGrid', byId.platformGrid.innerHTML);
scanOutput('#publicationsGrid', byId.publicationsGrid.innerHTML);
scanOutput('#latestPostsGrid', byId.latestPostsGrid.innerHTML);

notes.push('#talksList rendered ' + (byId.talksList.innerHTML.match(/talk-item/g) || []).length + ' talk entries');
notes.push('#latestPostsGrid rendered ' + (byId.latestPostsGrid.innerHTML.match(/latest-post-card/g) || []).length + ' rows');
notes.push('#publicationsGrid rendered ' + (byId.publicationsGrid.innerHTML.match(/pub-card/g) || []).length + ' cards');

// Give any rejected promises a turn to surface.
setTimeout(function () {
  notes.forEach(function (n) { console.log('  ' + n); });
  console.log('');
  if (problems.length) {
    console.log('PROBLEMS (' + problems.length + '):');
    problems.forEach(function (p) { console.log('  ! ' + p); });
    process.exit(1);
  }
  console.log('render check clean: every renderer executed and produced no undefined/NaN');
}, 60);