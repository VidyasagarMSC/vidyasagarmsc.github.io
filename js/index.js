$(function() {

  // ============================================
  // Scroll Progress Bar
  // ============================================
  var $win = $(window);
  var $progBar = $('#progressBar');

  $win.on('scroll', function() {
    var scrollTop = $(document).scrollTop();
    var docHeight = $(document).height() - $win.height();
    $progBar.width((scrollTop / docHeight) * 100 + '%');
  });

  // ============================================
  // AJAX Content Loading
  // ============================================
  var sections = [
    { target: '#aboutContent',   source: 'about.html' },
    { target: '#blogContent',    source: 'blog.html' },
    { target: '#photosContent',  source: 'photos.html' },
    { target: '#connectContent', source: 'footer.html' }
  ];

  $.each(sections, function(_, s) {
    var $t = $(s.target);
    if (!$t.length) return;
    $t.load(s.source + ' #content', function(resp, status, xhr) {
      if (status === 'error') {
        $t.html('<p style="text-align:center;padding:20px;color:var(--text-muted);">Content loading...</p>');
        return;
      }
      setTimeout(initFadeIn, 150);
      if (s.target === '#photosContent') initGallery();
    });
  });

  initBlogFilters();

  // ============================================
  // Nav Dots & Scroll Spy
  // ============================================
  var $navDots  = $('.nav-dot');
  var $sections = $('section[id]');

  $navDots.on('click', function() {
    var id = $(this).data('section');
    if (id === 'research.html') { window.location.href = id; return; }
    $('#' + id).length && $('html, body').animate({ scrollTop: $('#' + id).offset().top }, 600);
    $('#navbarMenu, #mobileToggle').removeClass('active');
  });

  function setActiveDot(id) {
    $navDots.removeClass('active').filter('[data-section="' + id + '"]').addClass('active');
  }

  $win.on('scroll', function() {
    var cur = '';
    $sections.each(function() {
      var t = $(this).offset().top;
      var h = $(this).outerHeight();
      if ($win.scrollTop() >= t - h / 3) cur = $(this).attr('id');
    });
    setActiveDot(cur);
  });

  // ============================================
  // Navbar Mobile Toggle
  // ============================================
  var $menu  = $('#navbarMenu');
  var $tog   = $('#mobileToggle');

  $tog.on('click', function() {
    $menu.add($tog).toggleClass('active');
  });

  $menu.on('click', '.navbar-item', function() {
    $menu.add($tog).removeClass('active');
  });

  // ============================================
  // Theme Toggle
  // ============================================
  var $body = $('body');
  var $tt   = $('#themeToggle');

  function setTheme(dark) {
    $body.toggleClass('dark-mode', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    $tt.html(dark
      ? '<span class="icon"><i class="fas fa-sun"></i></span><span>Light</span>'
      : '<span class="icon"><i class="fas fa-moon"></i></span><span>Dark</span>');
  }

  if ($tt.length) {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) setTheme(true);
    $tt.on('click', function() { setTheme(!$body.hasClass('dark-mode')); });
  }

  // ============================================
  // Fade-In Observer
  // ============================================
  function initFadeIn() {
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    $('.fade-in:not(.visible)').each(function() { io.observe(this); });
  }
  setTimeout(initFadeIn, 300);

  // ============================================
  // Hero Canvas (Particle Effect)
  // ============================================
  function initHeroCanvas() {
    var c = $('#heroCanvas')[0];
    if (!c) return;
    var ctx = c.getContext('2d');
    var pts = [], mx = 0, my = 0;

    function resize() {
      c.width = c.parentElement.offsetWidth;
      c.height = c.parentElement.offsetHeight;
    }
    resize();
    $(window).on('resize', resize);

    $(c).on('mousemove', function(e) {
      var o = c.getBoundingClientRect();
      mx = e.clientX - o.left; my = e.clientY - o.top;
    });

    for (var i = 0; i < Math.min(80, Math.floor(c.width / 15)); i++) {
      pts.push({ x: Math.random() * c.width, y: Math.random() * c.height,
                 vx: (Math.random() - 0.5) * 0.8, vy: (Math.random() - 0.5) * 0.8,
                 s: Math.random() * 2 + 1, a: Math.random() * 0.5 + 0.2 });
    }

    function anim() {
      ctx.clearRect(0, 0, c.width, c.height);
      var clr = $body.hasClass('dark-mode') ? 'rgba(255,255,255,' : 'rgba(79,70,229,';

      pts.forEach(function(p) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > c.width)  p.vx *= -1;
        if (p.y < 0 || p.y > c.height) p.vy *= -1;

        var dx = mx - p.x, dy = my - p.y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          ctx.strokeStyle = clr + (0.06 * (1 - d / 120)) + ')';
          ctx.lineWidth = 0.5;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mx, my); ctx.stroke();
        }

        ctx.fillStyle = clr + p.a + ')';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2); ctx.fill();
      });

      pts.forEach(function(p1, i) {
        for (var j = i + 1; j < pts.length; j++) {
          var p2 = pts[j];
          var dx = p1.x - p2.x, dy = p1.y - p2.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < 150) {
            ctx.strokeStyle = clr + (0.08 * (1 - d / 150)) + ')';
            ctx.lineWidth = 0.5;
            ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
          }
        }
      });
      requestAnimationFrame(anim);
    }
    anim();
  }
  initHeroCanvas();

  // ============================================
  // Gallery Lightbox
  // ============================================
  function initGallery() {
    var $items = $('.gallery-item img');
    var $lb    = $('#lightbox');
    if (!$lb.length || !$items.length) return;

    var $img = $('#lightboxImg');
    var $cls = $('#lightboxClose');
    var $prv = $('#lightboxPrev');
    var $nxt = $('#lightboxNext');
    var idx  = 0;
    var srcs = $items.map(function() { return this.src; }).get();

    function open(i) { idx = i; $img.attr('src', srcs[idx]); $lb.addClass('active'); $('body').css('overflow', 'hidden'); }
    function close() { $lb.removeClass('active'); $('body').css('overflow', ''); }
    function prev() { idx = (idx - 1 + srcs.length) % srcs.length; $img.attr('src', srcs[idx]); }
    function next() { idx = (idx + 1) % srcs.length; $img.attr('src', srcs[idx]); }

    $items.css('cursor', 'pointer').each(function(i) { $(this).on('click', function() { open(i); }); });
    $cls.on('click', close);
    $prv.on('click', prev);
    $nxt.on('click', next);
    $lb.on('click', function(e) { if (e.target === this) close(); });
    $(document).on('keydown', function(e) {
      if (!$lb.hasClass('active')) return;
      if (e.key === 'Escape')      close();
      if (e.key === 'ArrowLeft')   prev();
      if (e.key === 'ArrowRight')  next();
    });
  }

  // ============================================
  // Blog Filters (latest-posts.html)
  // ============================================
  function initBlogFilters() {
    var $btns  = $('.filter-btn');
    var $cards = $('.blog-card');
    if (!$btns.length || !$cards.length) return;

    $btns.on('click', function() {
      var f = $(this).data('filter');
      $btns.removeClass('active');
      $(this).addClass('active');

      $cards.each(function() {
        $(this).toggle(f === 'all' || ($(this).attr('data-platform') || '').indexOf(f) !== -1);
      });
    });
  }

  // ============================================
  // Console
  // ============================================
  console.log('%c Vidyasagar Machupalli ', 'background:linear-gradient(135deg,#4f46e5 0%,#7c3aed 100%);color:#fff;padding:10px 20px;border-radius:5px;font-size:14px;font-weight:bold;');
});
