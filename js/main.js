// ============================================
// THEME MANAGEMENT
// ============================================
function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved === 'dark' || (!saved && prefersDark);
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  updateThemeIcon(isDark);
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme === 'dark');
  if (typeof drawKnowledgeGraph === 'function') {
    setTimeout(drawKnowledgeGraph, 100);
  }
}

function updateThemeIcon(isDark) {
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  }
}

// ============================================
// NAVBAR SCROLL EFFECT & MOBILE TOGGLE
// ============================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('mobileToggle');
  const links = document.getElementById('navbarLinks');
  const overlay = document.getElementById('navbarOverlay');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  if (toggle && links) {
    function openMenu() {
      toggle.classList.add('active');
      links.classList.add('open');
      if (overlay) overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      toggle.classList.remove('active');
      links.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', () => {
      if (links.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }

    links.querySelectorAll('.navbar-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
}

// ============================================
// SCROLL SPY
// ============================================
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY;
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = section.id;
      }
    });
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${current}`));
  });
}

// ============================================
// FADE-IN OBSERVER
// ============================================
function initFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.style.getPropertyValue('--delay') || '0s';
        entry.target.style.transitionDelay = delay;
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in').forEach(el => observer.observe(el));
}

// ============================================
// BLOG FILTERS (latest-posts.html)
// ============================================
function initBlogFilters() {
  const filterBtns = document.querySelectorAll('.platform-filters .filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.latest-post-card').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.platform === filter) ? 'flex' : 'none';
      });
    });
  });
}

// ============================================
// CONSOLE EASTER EGG
// ============================================
function consoleGreeting() {
  console.log('%c Vidyasagar Machupalli ', 'background:linear-gradient(135deg,#FF6B00 0%,#FF8A33 100%);color:#fff;padding:10px 20px;border-radius:5px;font-size:14px;font-weight:bold;');
  console.log('%c Technology Leader • Architect • Author ', 'color:#FF6B00;font-size:12px;font-weight:500;');
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initScrollSpy();
  initFadeIn();
  initBlogFilters();
  consoleGreeting();

  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
});
