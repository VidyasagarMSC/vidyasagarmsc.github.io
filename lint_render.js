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
  'publicationsGrid', 'platformGrid', 'topicExplorer',
  'topicFilters', 'trendingGrid', 'knowledgeGraph', 'talksList', 'talkCount',
  'speakingStat', 'latestPostsGrid', 'yearRail', 'resultCount',
  'pubCount', 'resultsCount', 'pubMore', 'searchResults', 'searchInput',
  'researchSearch', 'citationTimeline', 'pubCards', 'journalReferences'
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
  for (const page of ['research.html', 'writing.html']) {
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

// The citation feed is fetched at runtime in the browser, but this harness has
// no real fetch. Load the committed file into the dataset before the renderers
// run; otherwise renderJournalReferences() hides the section and the check
// would pass by rendering nothing.
const FEED_PATH = path.join(ROOT, 'public/data/citations-of-work.json');
const feedRaw = JSON.parse(fs.readFileSync(FEED_PATH, 'utf8'));
const feedRefs = Array.isArray(feedRaw) ? feedRaw : (feedRaw && feedRaw.references);
const refsForCheck = Array.isArray(feedRefs) ? feedRefs : [];
if (!refsForCheck.length) {
  console.log('  ! public/data/citations-of-work.json has no references');
  process.exitCode = 1;
} else {
  vm.runInContext('researchData.journalReferences = ' + JSON.stringify(refsForCheck), ctx);
}

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
  ['renderJournalReferences', []],
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
scanOutput('#journalReferences', byId.journalReferences.innerHTML);
scanOutput('#platformGrid', byId.platformGrid.innerHTML);
scanOutput('#publicationsGrid', byId.publicationsGrid.innerHTML);
scanOutput('#latestPostsGrid', byId.latestPostsGrid.innerHTML);

notes.push('#talksList rendered ' + (byId.talksList.innerHTML.match(/talk-item/g) || []).length + ' talk entries');
notes.push('#latestPostsGrid rendered ' + (byId.latestPostsGrid.innerHTML.match(/latest-post-card/g) || []).length + ' rows');
notes.push('#publicationsGrid rendered ' + (byId.publicationsGrid.innerHTML.match(/pub-card/g) || []).length + ' cards');

// A reference card carries another author's work, so it must render the
// attribution cue and the DOI. Silence here would let a later edit promote
// someone else's paper back into my library without a failure.
const jrHtml = byId.journalReferences.innerHTML;
const jrCount = (jrHtml.match(/jr-card/g) || []).length;
// Top-level `const` in the loaded scripts is a lexical binding, not a property
// of the context object, so read the dataset back through the context.
const jrExpected = vm.runInContext('researchData.journalReferences.length', ctx);
notes.push('#journalReferences rendered ' + jrCount + ' reference card(s)');
if (jrCount !== jrExpected) {
  problems.push('#journalReferences rendered ' + jrCount + ' cards for ' +
                jrExpected + ' references');
}
if (jrCount && !/not my publication/.test(jrHtml)) {
  problems.push('#journalReferences is missing the "not my publication" attribution cue');
}
if (jrCount && !/doi\.org/.test(jrHtml)) {
  problems.push('#journalReferences is missing the DOI link');
}
// Every card is another author's work, not mine. The chip is small, so a
// missing one is easy to miss by eye but means the card lost its cue.
const refOnly = (jrHtml.match(/class="jr-kind"/g) || []).length;
if (refOnly !== jrCount) {
  problems.push('#journalReferences rendered ' + refOnly + ' "Reference only" chips for ' +
                jrCount + ' cards');
}

// The feed is the only source for these cards, so validate its shape here
// rather than discovering a bad entry after it renders.
const ALLOWED_KINDS = new Set(['journal', 'thesis', 'patent']);
const seenRefIds = new Set();
const articleUrls = new Set(vm.runInContext(
  'researchData.articles.map(function (a) { return a && a.url; }).filter(Boolean)', ctx));
const feedKinds = new Set();
refsForCheck.forEach(function (r, i) {
  const label = 'feed reference ' + (r && r.id ? r.id : '#' + i);
  if (!r || typeof r !== 'object') {
    problems.push(label + ' is not an object');
    return;
  }
  if (!r.id) problems.push(label + ' has no id');
  else if (seenRefIds.has(r.id)) problems.push(label + ' duplicates an id');
  seenRefIds.add(r.id);
  if (!ALLOWED_KINDS.has(r.kind)) {
    problems.push(label + ' has kind ' + JSON.stringify(r.kind) +
                  ' (expected journal, thesis or patent)');
  }
  feedKinds.add(r.kind);
  if (!r.title) problems.push(label + ' has no title');
  if (!String(r.authors || r.authorFull || '').trim()) problems.push(label + ' has no author');
  if (!/^https:\/\//.test(String(r.url || ''))) problems.push(label + ' has no https url');
  if (!Array.isArray(r.cites) || !r.cites.length) {
    problems.push(label + ' has no cites[] entry');
  } else {
    r.cites.forEach(function (c) {
      if (!c || !c.url) problems.push(label + ' has a cite with no url');
      else if (!articleUrls.has(c.url)) {
        problems.push(label + ' cites a url that is not in researchData.articles: ' + c.url);
      }
    });
  }
  if (r.kind === 'journal' && !r.journal) problems.push(label + ' (journal) has no journal');
  if (r.kind === 'thesis' && !r.venue) problems.push(label + ' (thesis) has no venue');
  if (r.kind === 'patent') {
    if (!Array.isArray(r.documents) || !r.documents.length) {
      problems.push(label + ' (patent) has no documents[]');
    } else {
      r.documents.forEach(function (d) {
        if (!d || !d.number) problems.push(label + ' has a patent document with no number');
        if (!d || !/^https:\/\//.test(String(d.url || ''))) {
          problems.push(label + ' has a patent document with no https url');
        }
      });
    }
  }
});

// The renderer picks a label and an action from `kind`, so a kind that is
// present in the feed but absent from the output is a silent mislabel.
const KIND_LABELS = { journal: 'Journal article', thesis: 'Thesis', patent: 'Patent family' };
feedKinds.forEach(function (kind) {
  if (KIND_LABELS[kind] && !new RegExp(KIND_LABELS[kind]).test(jrHtml)) {
    problems.push('#journalReferences has a ' + kind + ' reference but no "' +
                  KIND_LABELS[kind] + '" label');
  }
});
const patentDocs = refsForCheck
  .filter(function (r) { return r && r.kind === 'patent'; })
  .reduce(function (n, r) { return n + (r.documents ? r.documents.length : 0); }, 0);
const docLists = jrHtml.match(/<ul class="jr-docs">[\s\S]*?<\/ul>/g) || [];
const renderedDocs = docLists.reduce(function (n, block) {
  return n + (block.match(/<li>/g) || []).length;
}, 0);
if (patentDocs && renderedDocs !== patentDocs) {
  problems.push('#journalReferences rendered ' + renderedDocs + ' patent document(s) for ' +
                patentDocs + ' in the feed');
}
if (feedKinds.has('patent') && !/patents\.google\.com/.test(jrHtml)) {
  problems.push('#journalReferences is missing the patent link');
}

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