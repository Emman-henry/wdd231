// js/fetchBusinesses.js
export async function fetchBusinesses() {
  try {
    const response = await fetch("./data/infor.json");
    if (!response.ok) throw new Error("Failed to fetch business data");
    return await response.json();
  } catch (error) {
    console.error("Error loading businesses:", error);
    return [];
  }
}

