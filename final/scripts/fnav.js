const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('show');
      hamburger.innerHTML = isOpen ? '&times;' : '&#9776;';
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Optional: Close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        hamburger.innerHTML = '&#9776;';
        hamburger.setAttribute('aria-expanded', false);
      });
    });
  }
