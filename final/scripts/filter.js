// js/filter.js
export function filterBusinesses(businesses, category) {
  if (category === "All") return businesses;
  return businesses.filter(biz => biz.category === category);
}

