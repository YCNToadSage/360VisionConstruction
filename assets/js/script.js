/* ============================================================
   360 CONSTRUCTION LLC — MAIN SCRIPT (FIXED & CLEANED)
   ============================================================ */

/* ── Navbar scroll effect ──────────────────────────────────── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

/* ── Mobile menu ───────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const isOpen = mobileMenu.classList.contains('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── Gallery filter buttons ────────────────────────────────── */
const filterBtns = document.querySelectorAll('.filter-btn');
if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.gallery-item').forEach(item => {
        if (filter === 'all') {
          item.style.display = '';
        } else {
          item.style.display = item.dataset.category === filter ? '' : 'none';
        }
      });
    });
  });
}

/* ── Scroll fade-in animations ─────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ── Testimonials (homepage only) ──────────────────────────── */
const testimonialsGrid = document.getElementById('testimonials-grid');
if (testimonialsGrid) {
  const testimonials = [
    {
      name: "James R.", location: "Montgomery, TX", rating: 5,
      text: "360 Construction completely transformed our back porch and patio. They showed up when they said they would, finished on time, and the quality was outstanding.",
      project: "Patio & Deck Build"
    },
    {
      name: "Linda M.", location: "The Woodlands, TX", rating: 5,
      text: "After a severe storm damaged our roof, these guys came out fast, gave us an honest quote, and had everything repaired within a week. Professional from start to finish.",
      project: "Storm Damage Roof Repair"
    },
    {
      name: "Carlos & Diane T.", location: "Conroe, TX", rating: 5,
      text: "We hired 360 for a full kitchen remodel and couldn't be happier. They communicated every step of the way, and the end result looks incredible.",
      project: "Kitchen Remodel"
    },
    {
      name: "Brian W.", location: "Willis, TX", rating: 5,
      text: "Had them pour a new driveway and extend our garage slab. Clean work, fair pricing, and they left the property cleaner than when they arrived.",
      project: "Concrete Driveway & Slab"
    }
  ];

  testimonialsGrid.innerHTML = testimonials.map(t => `
    <div class="testimonial-card fade-up">
      <div class="quote-mark">"</div>
      <div class="stars">${'<span class="star">★</span>'.repeat(t.rating)}</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="author-avatar">${t.name.charAt(0)}</div>
        <div>
          <div class="author-name">${t.name}</div>
          <div class="author-detail">${t.location} · ${t.project}</div>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

/* ── Contact form ───────────────────────────────────────────── */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('.form-submit');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    await new Promise(r => setTimeout(r, 1200));
    contactForm.style.display = 'none';
    const successEl = document.getElementById('form-success');
    if (successEl) successEl.style.display = 'block';
  });
}
