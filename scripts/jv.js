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
document.addEventListener("DOMContentLoaded", () => {
  const allCourses = document.querySelectorAll(".small-card2 > div");
  const wddCourses = document.querySelectorAll(".wdd");
  const cseCourses = document.querySelectorAll(".cse");

  const card1 = document.querySelector(".card1");
  const card2 = document.querySelector(".card2");
  const card3 = document.querySelector(".card3");

  if (card1 && card2 && card3) {
    card1.addEventListener("click", () => {
      allCourses.forEach(course => course.style.display = "block");
    });

    card2.addEventListener("click", () => {
      allCourses.forEach(course => course.style.display = "none");
      wddCourses.forEach(course => course.style.display = "block");
    });

    card3.addEventListener("click", () => {
      allCourses.forEach(course => course.style.display = "none");
      cseCourses.forEach(course => course.style.display = "block");
    });
  } else {
    console.warn("One or more card buttons not found.");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const allCourses = document.querySelectorAll(".course");
  const totalCreditsEl = document.getElementById("totalCredits");

  const cardAll = document.querySelector(".card1");
  const cardWdd = document.querySelector(".card2");
  const cardCse = document.querySelector(".card3");

  function showCourses(type) {
    let total = 0;

    allCourses.forEach(course => {
      const courseType = course.getAttribute("data-type");
      if (type === "all" || courseType === type) {
        course.style.display = "block";
        total += parseInt(course.getAttribute("data-credits"));
      } else {
        course.style.display = "none";
      }
    });

    totalCreditsEl.textContent = total;
  }

  // Show all on initial load
  showCourses("all");

  // Add click handlers
  cardAll.addEventListener("click", () => showCourses("all"));
  cardWdd.addEventListener("click", () => showCourses("wdd"));
  cardCse.addEventListener("click", () => showCourses("cse"));
});

