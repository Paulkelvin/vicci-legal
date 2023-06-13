"use strict";

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");
let visibleSection = null;

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Hide the nav links
    navLinks.classList.remove("show");

    // Only perform these actions for links with a corresponding section
    if (this.getAttribute("href") !== "#") {
      // Hide the current visible section
      if (visibleSection) {
        visibleSection.classList.remove("visible");
        visibleSection.classList.add("hidden");
        visibleSection.style.zIndex = 0;
        // visibleSection.remove(); // Commented out to keep the clicked section in the DOM
      }

      // Show the clicked section
      const section = document.querySelector(this.getAttribute("href"));
      if (section) {
        section.classList.remove("hidden");
        section.classList.add("visible");
        section.style.zIndex = 100;
        visibleSection = section; // Update the visible section reference
      }

      // Remove active class from all links
      document.querySelectorAll(".nav-links li").forEach((li) => {
        li.classList.remove("active");
      });

      // Add active class to clicked link
      this.parentElement.classList.add("active");

      // // Remove other sections from the DOM
      // document.querySelectorAll("section").forEach((section) => {
      //   if (section !== visibleSection) {
      //     section.remove();
      //   }
      // });
    }
  });
});
