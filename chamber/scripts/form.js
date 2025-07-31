// Set the timestamp value to current ISO datetime
document.getElementById("timestamp").value = new Date().toISOString();

// Get all "Learn More" links inside cards
const links = document.querySelectorAll(".card a");

// Add event listeners to each link to open its corresponding dialog
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    
    // Get the href of the clicked link (e.g., "#modal-gold")
    const modalId = link.getAttribute("href").substring(1); // remove #
    
    // Find the dialog by that ID and open it
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  });
});
