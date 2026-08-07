/* ARCHITECT'S LOFT, shared UI script (nav drawer, scroll, fade-in) */
(function () {
  'use strict';

  var nav      = document.getElementById('nav');
  var toggle   = document.getElementById('navToggle');
  var links    = document.getElementById('navLinks');
  var backdrop = document.getElementById('navBackdrop');

  /* nav shadow on scroll */
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* mobile drawer, slides in from the right */
  function openDrawer() {
    links.classList.add('open');
    backdrop.classList.add('show');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';   /* body only, never html (iOS Safari) */
  }
  function closeDrawer() {
    links.classList.remove('open');
    backdrop.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  function toggleDrawer() {
    if (links.classList.contains('open')) { closeDrawer(); } else { openDrawer(); }
  }

  if (toggle && links && backdrop) {
    toggle.addEventListener('click', toggleDrawer);
    backdrop.addEventListener('click', closeDrawer);
    /* close after tapping a link */
    var anchors = links.querySelectorAll('a');
    for (var i = 0; i < anchors.length; i++) {
      anchors[i].addEventListener('click', closeDrawer);
    }
    /* close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) { closeDrawer(); }
    });
    /* close if resizing up to desktop */
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768 && links.classList.contains('open')) { closeDrawer(); }
    });
  }

  /* fade-in on scroll */
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('visible');
          obs.unobserve(entries[i].target);
        }
      }
    }, { threshold: 0.1 });
    var faders = document.querySelectorAll('.fade-in');
    for (var j = 0; j < faders.length; j++) { obs.observe(faders[j]); }
  } else {
    var all = document.querySelectorAll('.fade-in');
    for (var k = 0; k < all.length; k++) { all[k].classList.add('visible'); }
  }
})();
