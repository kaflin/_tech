// ===== TECHWORLD LAB - REUSABLE COMPONENTS =====

// ---- CURSOR ----
function initCursor() {
  const cursor = document.querySelector('.cursor');
  const ring = document.querySelector('.cursor-ring');
  if (!cursor || !ring) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animate() {
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
    ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
    requestAnimationFrame(animate);
  }
  animate();
  document.querySelectorAll('a,button,.btn,.course-card,.team-card,.filter-tab').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.transform += ' scale(1.8)'; ring.style.opacity = '0.9'; });
    el.addEventListener('mouseleave', () => { ring.style.opacity = '0.5'; });
  });
}

// ---- NAVBAR ----
function renderNavbar() {
  const html = `
    <div class="cursor"></div>
    <div class="cursor-ring"></div>
    <div class="grid-bg"></div>
    <nav class="navbar" id="navbar">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          <div class="logo-icon">TW</div>
          <div class="logo-text">TechWorld<span>LAB</span></div>
        </a>
        <ul class="nav-links" id="navLinks">
          <li><a href="index.html" data-page="home">Home</a></li>
          <li><a href="courses.html" data-page="courses">Courses</a></li>
          <li><a href="about.html" data-page="about">About</a></li>
          <li><a href="team.html" data-page="team">Team</a></li>
          <li><a href="contact.html" data-page="contact">Contact</a></li>
          <li><a href="contact.html" class="nav-cta">Enroll Now</a></li>
        </ul>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>`;
  document.body.insertAdjacentHTML('afterbegin', html);

  // Scroll behavior
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Mobile toggle
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.classList.remove('open'); links.classList.remove('open');
  }));

  // Active link
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });
}

// ---- FOOTER ----
function renderFooter() {
  const html = `
    <footer class="footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo" style="display:inline-flex;text-decoration:none;">
            <div class="logo-icon">TW</div>
            <div class="logo-text">TechWorld<span>LAB</span></div>
          </a>
          <p>Nepal's premier IT training institute. Empowering careers through world-class QA, software testing & automation education.</p>
          <div class="footer-socials">
            <a href="#" class="social-btn">f</a>
            <a href="#" class="social-btn">in</a>
            <a href="#" class="social-btn">yt</a>
            <a href="#" class="social-btn">gh</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Courses</div>
          <ul class="footer-links">
            <li><a href="courses.html">QA Automation</a></li>
            <li><a href="courses.html">Software Testing</a></li>
            <li><a href="courses.html">Selenium & Java</a></li>
            <li><a href="courses.html">Cypress & Playwright</a></li>
            <li><a href="courses.html">API Testing</a></li>
            <li><a href="courses.html">DevOps & CI/CD</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Company</div>
          <ul class="footer-links">
            <li><a href="about.html">About Us</a></li>
            <li><a href="team.html">Our Team</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Contact</div>
          <ul class="footer-links">
            <li><a href="#">📍 Kathmandu, Nepal</a></li>
            <li><a href="tel:+977-9800000000">📞 +977-980-000-0000</a></li>
            <li><a href="mailto:info@techworldlab.com.np">✉ info@techworldlab.com.np</a></li>
            <li><a href="#">🕘 Sun–Fri: 9AM–6PM</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© 2024 <span>TechWorld Lab</span>. All rights reserved.</div>
        <div>Built with ❤️ in Nepal 🇳🇵</div>
      </div>
    </footer>`;
  document.body.insertAdjacentHTML('beforeend', html);
}

// ---- FADE-IN OBSERVER ----
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ---- TOAST ----
function showToast(msg, icon = '✅') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast'; toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${msg}</span>`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ---- MODAL ----
function openModal(contentHtml) {
  let overlay = document.getElementById('modalOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'modalOverlay';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `<div class="modal" id="modal"><button class="modal-close" id="modalClose">✕</button><div id="modalContent"></div></div>`;
    document.body.appendChild(overlay);
    document.getElementById('modalClose').addEventListener('click', closeModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  }
  document.getElementById('modalContent').innerHTML = contentHtml;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) { overlay.classList.remove('open'); document.body.style.overflow = ''; }
}

// ---- COUNTER ANIMATION ----
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current) + suffix;
      if (current >= target) clearInterval(timer);
    }, 20);
  });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  initCursor();
  initScrollAnimations();

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounters(); observer.disconnect(); } });
  }, { threshold: 0.3 });
  const statsEl = document.querySelector('.hero-stats');
  if (statsEl) observer.observe(statsEl);
});
