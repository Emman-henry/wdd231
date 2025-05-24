document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    let menuOpen = false;

    menuToggle.addEventListener("click", function () {
        menuOpen = !menuOpen;

        if (menuOpen) {
            navMenu.style.display = "block";
            menuToggle.textContent = "✖"; // Change to close icon
        } else {
            navMenu.style.display = "none";
            menuToggle.textContent = "☰"; // Change back to hamburger
        }
    });
});


document.getElementById("year").textContent = new Date().getFullYear();

// Set last modified date of the document
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
