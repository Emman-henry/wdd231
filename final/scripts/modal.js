// js/modal.js
export function openModal(biz) {
  const modal = document.getElementById("business-modal");
  modal.querySelector("h2").textContent = biz.name;
  modal.querySelector("img").src = biz.logo;
  modal.querySelector("p").textContent = biz.description;
  modal.querySelector("a").href = biz.website;
  modal.style.display = "block";
}

export function closeModal() {
  document.getElementById("business-modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".modal-close").addEventListener("click", closeModal);
});
