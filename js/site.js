/* ============================================
   SITE BEHAVIOUR
   Theme, reveal-on-scroll, scrollspy,
   progress rail, mobile nav, and the
   single source for every stated figure.
   ============================================ */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Stated figures: the single source ----------
   *
   * Everything below reads from SITE_STATS; nothing re-states a figure.
   * ----------
   *
   * Every number the site asserts about the author used to be typed into the
   * markup by hand, in seven places across five files. They drifted: the DZone
   * article count reached 107 in six of them while the homepage still said 106,
   * because a stale-figure check written against the phrasings rather than the
   * numbers did not match "106</b><span>DZone articles". The fix is not a better
   * check, it is not having seven copies.
   *
   * So: declare each figure once here, and let every page read it.
   *
   *   data-stat="key"      the element's whole text becomes the value
   *   data-stat-in="key"   {{key}} inside the element's text is replaced, for
   *                        figures that sit inside a sentence
   *
   * Each site still carries the value as its initial text, so the page reads
   * correctly with JavaScript off and before this runs. Those fallbacks are
   * verified against this object by lint_html.py, which is the check that would
   * have caught the 106.
   */
  var SITE_STATS = {
    dzoneArticles: '107',
    dzoneViews: '652.4K',
    dzoneReputation: '7,206',
    mediumFollowers: '717',
    totalArticles: '200+',
    developersReached: '1M+'
  };

  // Exposed because js/research.js builds its platform cards from these figures
  // and loads after this file. Keeping one object rather than letting the
  // dataset restate them is the whole point.
  window.SITE_STATS = SITE_STATS;

  function applyStats() {
    document.querySelectorAll('[data-stat]').forEach(function (el) {
      var v = SITE_STATS[el.getAttribute('data-stat')];
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-stat-in]').forEach(function (el) {
      var v = SITE_STATS[el.getAttribute('data-stat-in')];
      if (v === undefined) return;
      el.textContent = el.textContent.replace(/\{\{\s*([\w]+)\s*\}\}/g, function (m, key) {
        return SITE_STATS[key] !== undefined ? SITE_STATS[key] : m;
      });
    });
  }

  applyStats();

  /* ---------- Theme ---------- */
  var themeBtn = document.getElementById('themeToggle');

  function applyTheme(theme) {
    root.dataset.theme = theme;
    try { localStorage.setItem('vm-theme', theme); } catch (e) {}
    if (themeBtn) {
      var icon = themeBtn.querySelector('i');
      if (icon) icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
    var meta = document.querySelector('meta[name="theme-color"]:not([media])');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0d1014' : '#eff2f1');
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  }

  applyTheme(root.dataset.theme === 'dark' ? 'dark' : 'light');

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  if (reduced || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Section counters (01, 02, …) ---------- */
  var seclabel = 0;
  document.querySelectorAll('.section-label').forEach(function (el) {
    var host = el.closest('section');
    if (host) host.style.counterReset = 'seclabel ' + (++seclabel);
  });

  /* ---------- Sticky nav + progress rail ---------- */
  var nav = document.getElementById('nav');
  var progress = document.getElementById('navProgress');

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;

    if (nav) nav.classList.toggle('is-stuck', y > 8);

    if (progress) {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    }
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { onScroll(); ticking = false; });
  }, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  var burger = document.getElementById('navBurger');
  var links = document.getElementById('navLinks');
  var scrim = document.getElementById('navScrim');

  function setNav(open) {
    if (!burger || !links) return;
    links.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    var icon = burger.querySelector('i');
    if (icon) icon.className = open ? 'fas fa-times' : 'fas fa-bars';
    if (scrim) scrim.classList.toggle('is-open', open);
    // Stop the page behind the drawer from scrolling with it. Restored
    // verbatim on close so the scroll position is never lost.
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (burger && links) {
    burger.addEventListener('click', function () {
      setNav(!links.classList.contains('open'));
    });

    if (scrim) scrim.addEventListener('click', function () { setNav(false); });

    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) setNav(false);
    });

    // Escape closes, matching the convention for any dismissible overlay.
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        setNav(false);
        burger.focus();
      }
    });

    // Returning to desktop width while open would otherwise leave the page
    // scroll-locked, since the burger is hidden and the drawer off-screen.
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860 && links.classList.contains('open')) setNav(false);
    });
  }

  /* ---------- Scrollspy ---------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll('section[id]'));
  var navMap = {};
  document.querySelectorAll('.nav-link[href^="#"]').forEach(function (a) {
    navMap[a.getAttribute('href').slice(1)] = a;
  });

  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        Object.keys(navMap).forEach(function (k) { navMap[k].classList.remove('is-active'); });
        if (navMap[id]) navMap[id].classList.add('is-active');
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Blog platform filters (latest-posts.html) ---------- */
  // A row's data-platform lists every venue it ran on, joined by VENUE_SEP, and
  // filtering is a membership test over that list — a cross-posted article stays
  // one row, so testing equality on a single primary venue would hide it from
  // the second.
  //
  // The separator is "|" and not a space because "DZone Legacy" contains one.
  // Splitting on whitespace turned it into ["DZone","Legacy"], so that filter
  // matched no rows at all while every other filter looked fine — a bug that
  // only appears once a venue name has a space in it.
  var VENUE_SEP = '|';
  var filterBtns = document.querySelectorAll('.platform-filters .filter-btn');
  var rc = document.getElementById('resultCount');

  // site.js and research.js are both deferred, and site.js comes first, so at
  // parse time the index is still an empty div -- the rows only exist after
  // initLatestPosts() has run. Anything that needs a row count has to ask for it
  // when the index says it is ready, not once at startup.
  function cardCount() {
    return document.querySelectorAll('.latest-post-card').length;
  }

  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.dataset.filter;
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        // `hidden` rather than an inline display value: the rows are CSS grid,
        // so writing style.display would overwrite the layout on every row.
        // It only hides at all because site.css backs [hidden] with
        // !important — .latest-post-card is display:grid and would otherwise
        // outrank the UA rule.
        // The selector must cover unlinked rows too: they are <div> elements
        // carrying the same .latest-post-card class, so one query handles both.
        var cards = document.querySelectorAll('.latest-post-card');
        var shown = 0;
        cards.forEach(function (card) {
          var venues = (card.dataset.platform || '').split(VENUE_SEP);
          var visible = filter === 'all' || venues.indexOf(filter) !== -1;
          card.hidden = !visible;
          if (visible) shown++;
        });

        // Two levels of heading now sit above a row — year inside era — so a
        // filter has to walk outward and empty both, or a collapsed heading
        // would label nothing. Doing it inner-first is what makes that safe.
        document.querySelectorAll('.year-group').forEach(function (group) {
          group.hidden = !group.querySelector('.latest-post-card:not([hidden])');
        });
        document.querySelectorAll('.era-band').forEach(function (band) {
          band.hidden = !band.querySelector('.latest-post-card:not([hidden])');
        });

        // The year rail is built from live row counts, so it has to be rebuilt
        // after a filter or it keeps offering years that no longer have rows.
        window.dispatchEvent(new CustomEvent('index:filtered'));

        if (rc) rc.textContent = resultText(filter, shown, cards.length);
      });
    });

    // Publish the unfiltered total once the index exists. Without this the
    // readout sits empty until the reader clicks something, which reads as a
    // broken control rather than as "nothing has been filtered yet".
    window.addEventListener('index:rendered', function () {
      var n = cardCount();
      if (rc) rc.textContent = resultText('all', n, n);
      window.dispatchEvent(new CustomEvent('index:filtered'));
    });
  }

  function resultText(filter, shown, total) {
    if (filter === 'all') return shown + (shown === 1 ? ' entry' : ' entries');
    return shown + ' of ' + total + ' from ' + filter;
  }

  /* ---------- Live experience counter (from Jul 2007) ---------- */
  var yearsEl = document.getElementById('expYears');
  if (yearsEl) {
    var start = new Date(2007, 6, 1); // July 2007
    var now = new Date();
    var years = now.getFullYear() - start.getFullYear();
    if (now.getMonth() < start.getMonth() ||
        (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())) {
      years -= 1;
    }
    yearsEl.textContent = String(Math.max(years, 0));
  }
})();