// thankyou.js

// Get the query parameters from the URL (e.g., ?firstName=John&lastName=Doe...)
const params = new URLSearchParams(window.location.search);
console.log([...params.entries()]);

/**
 * Helper function to safely update the content of an element.
 * @param {string} id - The id of the HTML element to update.
 * @param {string} value - The text value to place inside the element.
 */
function updateField(id, value) {
  const el = document.getElementById(id);
  if (el && value) el.textContent = value; // Only update if both element and value exist
}

// Extract and display individual form values on the thank you page
updateField("firstName", params.get("firstName"));       // Sets the user's first name
updateField("lastName", params.get("lastName"));         // Sets the user's last name
updateField("email", params.get("email"));               // Sets the user's email address
updateField("phone", params.get("phone"));               // Sets the user's phone number
updateField("organization", params.get("organization")); // Sets the organization name
updateField("membership", params.get("membership"));     // Sets the selected membership level

// Get the timestamp value from the URL and convert it to a readable format
const isoTime = params.get("timestamp");
if (isoTime) {
  const date = new Date(isoTime); // Convert ISO timestamp string to a Date object
  document.getElementById("timestamp").textContent = date.toLocaleString(); // Display in a friendly format
}
