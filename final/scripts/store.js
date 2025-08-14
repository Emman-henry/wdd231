// js/storage.js
export function saveCategory(category) {
  localStorage.setItem("selectedCategory", category);
}

export function getCategory() {
  return localStorage.getItem("selectedCategory") || "All";
}
