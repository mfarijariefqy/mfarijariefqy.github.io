// Site interactions: years of experience, mobile nav, scroll reveal

(function () {
  // Hitung tahun pengalaman otomatis dari tanggal mulai kerja (agar tidak basi)
  function yearsSince(isoMonth) {
    const [y, m] = isoMonth.split('-').map(Number);
    const now = new Date();
    let years = now.getFullYear() - y;
    if (now.getMonth() + 1 < m) years--;
    return years;
  }

  const CAREER_START = '2020-01';
  const years = yearsSince(CAREER_START);

  // Sinkronkan ke data chatbot (chatbot-data.js dimuat sebelum file ini)
  if (typeof profileData !== 'undefined') {
    profileData.personalInfo.yearsOfExperience = years;
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-years-since]').forEach(el => {
      el.textContent = yearsSince(el.dataset.yearsSince);
    });

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Navbar shadow on scroll
    const nav = document.getElementById('nav');
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 10);
      // Di bagian paling atas (hero), tidak ada menu yang aktif
      if (window.scrollY < 200) {
        document.querySelectorAll('#nav-links a.active').forEach(a => a.classList.remove('active'));
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Mobile menu
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.innerHTML = open ? '<i class="bi bi-x-lg"></i>' : '<i class="bi bi-list"></i>';
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.innerHTML = '<i class="bi bi-list"></i>';
    }));

    // Active link highlight
    const sections = [...document.querySelectorAll('main section[id]')];
    const navAnchors = [...links.querySelectorAll('a')];
    const spy = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));

    // Reveal on scroll
    const reveal = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          reveal.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
  });
})();
