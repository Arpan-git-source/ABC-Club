// AOS init
AOS.init({
  duration: 1200,
  easing: 'ease-in-out',
  once: true,
  offset: 60
});

/* -----------------------
   Audio controls (same)
   ----------------------- */
const audio = document.getElementById("bg-music");
const audioBtn = document.getElementById("audio-control");
window.addEventListener("click", () => {
  if (audio && audio.paused) audio.play();
}, { once: true });
if (audioBtn) {
  audioBtn.addEventListener("click", () => {
    if (!audio) return;
    audio.muted = !audio.muted;
    audioBtn.textContent = audio.muted ? "🔇" : "🔊";
  });
}

/* -----------------------
   Page content strings
   ----------------------- */
const content = {
  // (keep your existing content strings exactly as before)
  home: `
      <section class="hero" data-aos="fade-up">
        <div class="hero-content">
          <h1 class="hero-title">Saraswati Puja</h1>
          <p class="hero-subtitle">A Celebration of Wisdom, Culture & Creative Harmony</p>
          <p class="hero-quote"><em>“Spreading wisdom through devotion, together as one.”</em></p>
        </div>
      </section>
      <section class="hero-description-section" data-aos="fade-up" data-aos-delay="100">
        <div class="hero-description">
          <h2>ABC Club Saraswati Puja</h2>
          <p class="tagline"><em>Where Wisdom Dances with Art</em></p>
          <p class="main-description">Since 1999, ABC Club has reimagined Saraswati Puja as more than a ritual — it's a celebration of learning, music, and creativity. From sacred symbols to soulful spaces, our festival becomes a living gallery of knowledge and culture.</p>
        </div>
      </section>
      <div class="page-footer">
        © 1999–2026 ABC Club. All Rights Reserved. | Designed & Developed by Arpan Garai
      </div>
    `,
  about: `
    <section class="about-section" data-aos="fade-up">
      <img src="about.png" alt="Saraswati Maa" class="about-img" />
      <div class="about-text">
        <h2 class="about-title">ABC Club</h2>
        <p class="about-tagline"><em>We were, we are, we will be.</em></p>
        <p>Rooted in tradition, driven by creativity, and united by community — ABC Club, established in 1999, is a Salboni-based socio-cultural organization in Paschim Medinipur, devoted to the celebration of knowledge, art, and collective spirit.</p>
        <p>As a not-for-profit platform, we focus on Saraswati Puja as more than a ritual — a tribute to wisdom, creativity, and emerging talent.</p>
        <h2 data-aos="fade-up" data-aos-delay="0">Our Vision</h2>
        <ul>
          <li data-aos="fade-up" data-aos-delay="100">To promote knowledge, creativity, and cultural legacy.</li>
          <li data-aos="fade-up" data-aos-delay="200">To transform traditional festivals into platforms for growth.</li>
          <li data-aos="fade-up" data-aos-delay="300">To support creative minds and artists.</li>
        </ul>
        <h2 data-aos="fade-up" data-aos-delay="400">Our Mission</h2>
        <ul>
          <li data-aos="fade-up" data-aos-delay="500">To organize Saraswati Puja with grace, innovation, and inclusivity.</li>
          <li data-aos="fade-up" data-aos-delay="600">To bring together individuals from diverse backgrounds under one celebration.</li>
          <li data-aos="fade-up" data-aos-delay="700">To use culture as a means of learning and unity.</li>
        </ul>
        <h2 data-aos="fade-up" data-aos-delay="800">Cultural Significance</h2>
        <p data-aos="fade-up" data-aos-delay="900">
          Saraswati Puja holds a sacred place in our hearts. It is not just a religious festival but a cultural celebration of learning, music, and creativity.Our event is dedicated to embracing this tradition with a touch of modernity—capturing the essence of devotion while celebrating the youth's spirit.
        </p>
        <h2 data-aos="fade-up" data-aos-delay="1300">Join Us</h2>
        <p data-aos="fade-up" data-aos-delay="1400">
          Be a part of this incredible celebration and witness the fusion of tradition and creativity like never before.
        </p>
      </div>
    </section>
      <div class="page-footer">
        © 1999–2026 ABC Club. All Rights Reserved. | Designed & Developed by Arpan Garai
      </div>
  `,
  schedule: `
    <section class="section" data-aos="fade-up" style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
      <h2 style="color: #ffd700; font-size: 2rem; margin-bottom: 20px;">Event Schedule</h2>
      <p style="max-width: 600px; color: #ccc;">Detailed day-wise schedule of Saraswati Puja 2026 will be updated soon. Stay tuned!</p>
    </section>
  `,
  gallery: `
    <section class="gallery-section" id="gallery2025" data-aos="fade-up">
      <h2 class="gallery-title">Gallery 2025</h2>
      <div class="gallery-grid">
        <a href="img11.jpg" class="gallery-item" data-index="0"><img src="img11.jpg" alt="Gallery Image 1"></a>
        <a href="img12.jpg" class="gallery-item" data-index="1"><img src="img12.jpg" alt="Gallery Image 2"></a>
        <a href="img13.jpg" class="gallery-item" data-index="2"><img src="img13.jpg" alt="Gallery Image 3"></a>
        <a href="img14.jpg" class="gallery-item" data-index="3"><img src="img14.jpg" alt="Gallery Image 4"></a>
        <a href="img15.jpg" class="gallery-item" data-index="4"><img src="img15.jpg" alt="Gallery Image 5"></a>
      </div>
    </section>
    <section class="gallery-section" id="gallery2024" data-aos="fade-up">
      <h2 class="gallery-title">Gallery 2024</h2>
      <div class="gallery-grid">
        <a href="img4.jpg" class="gallery-item" data-index="0"><img src="img4.jpg" alt="Gallery Image 1"></a>
        <a href="img5.jpg" class="gallery-item" data-index="1"><img src="img5.jpg" alt="Gallery Image 2"></a>
        <a href="img6.jpg" class="gallery-item" data-index="2"><img src="img6.jpg" alt="Gallery Image 3"></a>
        <a href="img7.jpg" class="gallery-item" data-index="3"><img src="img7.jpg" alt="Gallery Image 4"></a>
        <a href="img8.jpg" class="gallery-item" data-index="4"><img src="img8.jpg" alt="Gallery Image 5"></a>
        <a href="img9.jpg" class="gallery-item" data-index="5"><img src="img9.jpg" alt="Gallery Image 6"></a>
        <a href="img10.jpg" class="gallery-item" data-index="5"><img src="img10.jpg" alt="Gallery Image 6"></a>
      </div>
    </section>
    <section class="gallery-section" id="gallery2023" data-aos="fade-up">
      <h2 class="gallery-title">Gallery 2023</h2>
      <div class="gallery-grid">
        <a href="img3.jpg" class="gallery-item" data-index="0"><img src="img3.jpg" alt="Gallery Image 1"></a>
        <a href="img1.jpg" class="gallery-item" data-index="1"><img src="img1.jpg" alt="Gallery Image 2"></a>
        <a href="img2.jpg" class="gallery-item" data-index="2"><img src="img2.jpg" alt="Gallery Image 3"></a>
      </div>
    </section>
    <div class="page-footer">
      © 1999–2026 ABC Club. All Rights Reserved. | Designed & Developed by Arpan Garai
    </div>

    <div id="lightbox" style="display:none;">
      <div id="lightbox-content">
        <span id="lightbox-close">&times;</span>
        <div id="lightbox-counter">1 / 5</div>
        <img id="lightbox-image" src="">
        <div id="lightbox-controls">
          <button id="prev-btn">&#10094;</button>
          <button id="next-btn">&#10095;</button>
        </div>
      </div>
    </div>
  `,
  contact: `
    <section id="contact">
      <div class="centered-container" data-aos="fade-up">
        <h2 class="location-heading">LOCATION</h2>
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.7614297944433!2d87.32314939999999!3d22.639304799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7e3d36e555053%3A0xb025d98f8163393f!2sSALBONI%20A.B.C%20CLUB!5e1!3m2!1sen!2sin!4v1745936857926!5m2!1sen!2sin"
            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
    <section class="contact-section" data-aos="fade-up">
      <div class="contact-container">
        <div class="contact-info">
          <h2>Feel Free to Contact Us</h2>
          <p><strong>Phone :</strong> (+91) 7001861255</p>
          <p><strong>Phone :</strong> (+91) 8972623445</p>
          <p><strong>Email :</strong> abcclub.official@gmail.com</p>
          <p><strong>Address :</strong> Salboni, Chaktarini, West Bengal, India, Pin- 721147.</p>
        </div>
        <div class="contact-form">
          <h2>Interested to work with us?</h2>
          <p>Fill & Submit</p>
          <form id="contact-form" action="https://formspree.io/f/xwpoobod" method="POST">
            <input type="text" name="name" placeholder="Your Name *" required>
            <div class="form-row">
              <input type="email" name="email" placeholder="Your Email *" required>
              <input type="text" name="phone" placeholder="Your Number *" required>
            </div>
            <textarea name="message" placeholder="Message *" required></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div id="thank-you" style="display: none;">
            <h3>Thank you for contacting us. We will reach you as soon as possible.</h3>
          </div>
        </div>
      </div>
    </section>
    <div class="page-footer">
      © 1999–2026 ABC Club. All Rights Reserved. | Designed & Developed by Arpan Garai
    </div>
  `
};
/* ---------- End content ---------- */

/* -----------------------
   loadSection (returns a Promise)
   ----------------------- */
function loadSection(section) {
  const mainContent = document.getElementById("main-content");
  if (!content[section]) return Promise.resolve();

  return new Promise((resolve) => {
    mainContent.style.opacity = 0;

    setTimeout(() => {
      mainContent.innerHTML = content[section];
      // Re-init AOS so animations work on newly-inserted elements
      AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true,
        offset: 60
      });

      mainContent.classList.add("fade-in");
      mainContent.style.opacity = 1;

      // Section-specific initializers
      if (section === 'gallery') initLightbox();
      if (section === 'contact') initContactForm();

      resolve();
    }, 300); // matches your fade timing
  });
}

/* -----------------------
   Lightbox (same as yours)
   ----------------------- */
function initLightbox() {
  let currentIndex = 0;
  const images = Array.from(document.querySelectorAll('.gallery-item'));
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const counter = document.getElementById('lightbox-counter');

  if (!images.length || !lightbox) return;

  function updateCounter() {
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
  }

  function showLightbox() {
    lightbox.style.display = 'flex';
    lightboxImage.src = images[currentIndex].getAttribute('href');
    updateCounter();
  }

  images.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      currentIndex = index;
      showLightbox();
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showLightbox();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
      if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showLightbox();
      } else if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % images.length;
        showLightbox();
      } else if (e.key === 'Escape') {
        lightbox.style.display = 'none';
      }
    }
  });
}

/* -----------------------
   Contact form initializer (only invoked after contact is loaded)
   ----------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const thankYou = document.getElementById('thank-you');

  if (!form) return;
  // avoid attaching duplicate listeners
  if (form.dataset.listener === 'true') return;
  form.dataset.listener = 'true';

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput ? emailInput.value : '';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email (e.g., user@example.com)");
      return;
    }

    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.style.display = 'none';
        if (thankYou) thankYou.style.display = 'block';
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit form. Please try again.');
    }
  });
}

/* -----------------------
   Mobile sidebar behavior for nav links
   - Waits for loadSection to finish, then closes sidebar & scrolls to top
   ----------------------- */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.sidebar nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href') || '#home';
      const target = href.replace('#', '') || 'home';

      // Load the section, then close sidebar + scroll to top
      loadSection(target).then(() => {
        const sidebar = document.getElementById('sidebar');
        const hamburger = document.getElementById('hamburger');
        const closeBtn = document.getElementById('closeBtn');

        if (sidebar) sidebar.classList.remove('active');
        if (hamburger) hamburger.style.display = 'flex';
        if (closeBtn) closeBtn.style.display = 'none';

        // Scroll to top to ensure newly-injected content is at viewport top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // update URL hash without triggering hashchange event
        history.replaceState(null, '', '#' + target);
      });
    });
  });

  // Load initial section (respect hash)
  const hash = window.location.hash.slice(1);
  const defaultSection = hash || 'home';
  loadSection(defaultSection);
});

// Also handle manual hash changes (user pastes/changes URL)
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.slice(1);
  if (hash) loadSection(hash);
});

/* -----------------------
   Sidebar toggler (existing function name used in HTML)
   ----------------------- */
function togglesidebar() {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  const closeBtn = document.getElementById('closeBtn');

  sidebar.classList.toggle('active');

  if (sidebar.classList.contains('active')) {
    if (hamburger) hamburger.style.display = 'none';
    if (closeBtn) closeBtn.style.display = 'block';
  } else {
    if (hamburger) hamburger.style.display = 'flex';
    if (closeBtn) closeBtn.style.display = 'none';
  }
}

// schedule: `
// <section class="section" data-aos="fade-up" style="min-height: 70vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
//   <h2 style="color: #ffd700; font-size: 2rem; margin-bottom: 20px;">Event Schedule</h2>
//   <div style="max-width: 700px; color: #ccc; font-size: 1.05rem; text-align: left;">
//     <h3 style="color: #ffcc00; margin-bottom: 10px;">Puja Rituals:</h3>
//     <ul style="margin-bottom: 20px; padding-left: 20px;">
//       <li><strong>Morning Puja:</strong> 7:00 AM – 9:00 AM</li>
//       <li><strong>Pushpanjali:</strong> 9:30 AM, 11:30 AM, 1:30 PM batches</li>
//       <li><strong>Aarti:</strong> Morning: (8:00 AM) & Evening: (6:00 PM)</li>
//     </ul>

//     <h3 style="color: #ffcc00; margin-bottom: 10px;">Bhog Distribution:</h3>
//     <ul style="padding-left: 20px;">
//       <li><strong>Bhog Timing:</strong> 12:30 PM – 2:00 PM</li>
//       <li><em>Bhog will be distributed after Pushpanjali</em></li>
//     </ul>
//   </div>
// </section>
// <div class="page-footer">
//   © 1999–2026 ABC Club. All Rights Reserved. | Designed & Developed by Arpan Garai
// </div>
// `,

