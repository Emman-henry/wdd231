 // js/main.js
import { fetchBusinesses } from "./fetchBusinesses.js";
import { renderBusinesses } from "./renderBusinesses.js";
import { filterBusinesses } from "./filter.js";
import { saveCategory, getCategory } from "./store.js";

document.addEventListener("DOMContentLoaded", async () => {
  const businesses = await fetchBusinesses();
  let currentCategory = getCategory();

  renderBusinesses(filterBusinesses(businesses, currentCategory), "business-directory");

  // Category buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentCategory = btn.dataset.category;
      saveCategory(currentCategory);
      renderBusinesses(filterBusinesses(businesses, currentCategory), "business-directory");
    });
  });
});
