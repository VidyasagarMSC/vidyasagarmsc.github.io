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
// SCROLL PROGRESS BAR
// ============================================
function initProgressBar() {
  const bar = document.getElementById('progressBar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    bar.style.width = `${(scrollTop / docHeight) * 100}%`;
  });
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
// SCROLL SPY & NAV DOTS
// ============================================
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-link');
  const navDots = document.querySelectorAll('.nav-dot');

  function updateActive(id) {
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
    navDots.forEach(d => d.classList.toggle('active', d.dataset.section === id));
  }

  // Nav dot clicks
  navDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const id = dot.dataset.section;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Scroll spy
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
    if (current) updateActive(current);
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
// HERO CANVAS (Particle Effect)
// ============================================
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouseX = 0, mouseY = 0;

  function resize() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  const count = Math.min(60, Math.floor(canvas.width / 18));
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      s: Math.random() * 2 + 0.5,
      a: Math.random() * 0.4 + 0.15
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const color = isDark ? 'rgba(255,255,255,' : 'rgba(249,115,22,';

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      const dx = mouseX - p.x, dy = mouseY - p.y, d = Math.sqrt(dx * dx + dy * dy);
      if (d < 150) {
        ctx.strokeStyle = color + (0.05 * (1 - d / 150)) + ')';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
      }

      ctx.fillStyle = color + p.a + ')';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 150) {
          ctx.strokeStyle = color + (0.06 * (1 - d / 150)) + ')';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

// ============================================
// LIGHTBOX
// ============================================
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const items = document.querySelectorAll('.gallery-item img');
  if (!lightbox || !items.length) return;

  let currentIndex = 0;
  const sources = Array.from(items).map(el => el.src);

  function open(index) {
    currentIndex = index;
    img.src = sources[currentIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function prev() {
    currentIndex = (currentIndex - 1 + sources.length) % sources.length;
    img.src = sources[currentIndex];
  }

  function next() {
    currentIndex = (currentIndex + 1) % sources.length;
    img.src = sources[currentIndex];
  }

  items.forEach((el, i) => {
    el.parentElement.addEventListener('click', () => open(i));
  });

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
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
// STATS LOADER — fetches stats.json from scraper
// ============================================
function loadStats() {
  const el = document.querySelector('[data-stat]');
  if (!el) return; // only on pages with stats badges

  fetch('/data/stats.json')
    .then(r => { if (!r.ok) throw new Error('No stats.json'); return r.json(); })
    .then(stats => {
      document.querySelectorAll('[data-stat]').forEach(el => {
        const key = el.dataset.stat;
        const val = stats[key];
        if (val) {
          const label = el.textContent.replace(/^[\d,.KkMmb+]+\s*/, '');
          el.textContent = `${val} ${label}`;
        }
      });
    })
    .catch(() => {}); // silently fall back to hardcoded values
}

// ============================================
// CONSOLE EASTER EGG
// ============================================
function consoleGreeting() {
  console.log('%c Vidyasagar Machupalli ', 'background:linear-gradient(135deg,#f97316 0%,#ea580c 100%);color:#fff;padding:10px 20px;border-radius:5px;font-size:14px;font-weight:bold;');
  console.log('%c Technology Leader • Architect • Author ', 'color:#f97316;font-size:12px;font-weight:500;');
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initProgressBar();
  initNavbar();
  initScrollSpy();
  initFadeIn();
  initHeroCanvas();
  initLightbox();
  initBlogFilters();
  loadStats();
  consoleGreeting();

  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
});
