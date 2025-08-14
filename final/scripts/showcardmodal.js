document.addEventListener('DOMContentLoaded', () => {
  console.log('[modals] init');

  // Open modals from "Learn More" links
  document.querySelectorAll('.membership-cards a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const modalId = link.getAttribute('href').substring(1);
      const modal = document.getElementById(modalId);
      if (modal) modal.showModal();
    });
  });

  // Close modals
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('dialog').close();
    });
  });

  // Click outside to close
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('click', e => {
      const rect = dialog.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        dialog.close();
      }
    });
  });
});
