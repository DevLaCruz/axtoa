document.addEventListener('DOMContentLoaded', function () {
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  // Dark mode toggle
  let darkModeToggle = document.getElementById('dark-mode-toggle');
  let body = document.body;
  let logoImage = document.querySelector('.home-img img');

  // Check if dark mode is enabled from previous session
  let isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
  if (isDarkModeEnabled) {
      body.classList.add('dark-mode');
      setDarkModeImage();
  }

  darkModeToggle.addEventListener('click', toggleDarkMode);

  function toggleDarkMode() {
      // Toggle dark mode class on body
      body.classList.toggle('dark-mode');

      // Store dark mode state in localStorage
      if (body.classList.contains('dark-mode')) {
          localStorage.setItem('darkMode', 'enabled');
      } else {
          localStorage.setItem('darkMode', 'disabled');
      }

      // Change icon dynamically based on mode
      let iconClass = body.classList.contains('dark-mode') ? 'bx-sun' : 'bx-moon';
      darkModeToggle.innerHTML = `<i class='bx ${iconClass}'></i>`;

      setDarkModeImage();
  }

  function setDarkModeImage() {
      // Change image source based on dark mode
      let logoSrc = body.classList.contains('dark-mode') ? './src/pages/images/logodark.jpg' : './src/pages/images/logo.jpg';
      logoImage.src = logoSrc;
  }

  menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx');
      navbar.classList.toggle('active');
  };

  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
      sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if (top >= offset && top < offset + height) {
              navLinks.forEach(links => {
                  links.classList.remove('active');
                  document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
              });
          }
      });

      let header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);

      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
  };

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top', distance: '80px', duration: 2000, delay: 200 });
  ScrollReveal().reveal('.home-img, .services-container', { origin: 'bottom', distance: '80px', duration: 2000, delay: 200 });
  ScrollReveal().reveal('.portfolio-box', { origin: 'bottom', distance: '80px', duration: 2000, delay: 200 });
  ScrollReveal().reveal('.home-content, .about-img', { origin: 'left', distance: '80px', duration: 2000, delay: 200 });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right', distance: '80px', duration: 2000, delay: 200 });

  const typed = new Typed('.multiple-text', {
      strings: ['Landing Page', 'Ecommerce', 'Blog', 'Personal Website'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Obtener el año actual
  const currentYear = new Date().getFullYear();

  // Establecer el año actual en el span con id "currentYear"
  document.getElementById('currentYear').textContent = currentYear;
});