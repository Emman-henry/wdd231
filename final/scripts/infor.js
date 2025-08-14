
async function loadBusinesses() {
  try {
    const response = await fetch('data/infor.json'); // Fetch JSON file
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const businesses = await response.json(); // Convert to JS array
    renderBusinesses(businesses);
  } catch (error) {
    console.error('Error loading business data:', error);
  }
}

function renderBusinesses(businesses) {
  const container = document.getElementById("business-directory");
  container.innerHTML = ''; // Clear before rendering

  businesses.forEach(biz => {
    const card = document.createElement("div");
    card.classList.add("business-card");
    card.innerHTML = `
      <img src="${biz.logo}" alt="${biz.name} logo">
      <h3>${biz.name}</h3>
      <p class="category">${biz.category}</p>
      <p>${biz.description}</p>
      <a href="${biz.website}" target="_blank">Visit Website</a>
    `;
    container.appendChild(card);
  });
}

// Load businesses on page load
loadBusinesses();
