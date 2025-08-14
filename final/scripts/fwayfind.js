document.addEventListener('DOMContentLoaded', () => {
  // Remove query params & hashes, get filename
  const currentPage = window.location.pathname.split('/').pop().split('?')[0].split('#')[0].toLowerCase() || "index.html";

  document.querySelectorAll('.nav-pages').forEach(link => {
    const linkPage = link.getAttribute('href').split('?')[0].split('#')[0].toLowerCase();
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
});
