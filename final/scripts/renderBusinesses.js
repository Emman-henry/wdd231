// js/renderBusinesses.js
import { openModal } from "./modal.js";

export function renderBusinesses(businesses, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  businesses.forEach(biz => {
    const card = document.createElement("div");
    card.classList.add("business-card");

    card.innerHTML = `
      <img src="${biz.logo}" alt="${biz.name} logo">
      <h3>${biz.name}</h3>
      <p class="category">${biz.category}</p>
      <p>${biz.description}</p>
      <button class="details-btn">Details</button>
    `;

    // Event for modal
    card.querySelector(".details-btn").addEventListener("click", () => {
      openModal(biz);
    });

    container.appendChild(card);
  });
}

