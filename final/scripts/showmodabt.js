const modal = document.getElementById('business-modal');
const modalTitle = modal.querySelector('h2');
const modalImg = modal.querySelector('img');
const modalDesc = modal.querySelector('p');
const modalLink = modal.querySelector('a');
const closeBtn = modal.querySelector('.modal-close');

// Open modal function
function openModal(biz) {
  modalTitle.textContent = biz.name;
  modalImg.src = biz.logo;
  modalImg.alt = `${biz.name} logo`;
  modalDesc.textContent = biz.description;
  modalLink.href = biz.website;
  modal.classList.add('active');
}

// Close modal
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Close when clicking outside content
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.remove('active');
});
