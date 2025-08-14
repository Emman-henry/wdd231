// Select all "Learn More" links
document.querySelectorAll('.membership-cards a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // prevent jumping to the ID
    const modalId = link.getAttribute('href').substring(1); // remove "#"
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  });
});
