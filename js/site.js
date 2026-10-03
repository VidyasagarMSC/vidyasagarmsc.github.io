/* ============================================
   SITE BEHAVIOUR
   Theme, reveal-on-scroll, scrollspy,
   progress rail, mobile nav.
   ============================================ */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
  var filterBtns = document.querySelectorAll('.platform-filters .filter-btn');
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.dataset.filter;
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        document.querySelectorAll('.latest-post-card').forEach(function (card) {
          card.style.display = (filter === 'all' || card.dataset.platform === filter) ? 'flex' : 'none';
        });
      });
    });
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