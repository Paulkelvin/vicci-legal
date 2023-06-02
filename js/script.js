"use strict";

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

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
      // Hide all sections
      document.querySelectorAll("section").forEach((section) => {
        section.classList.add("hidden");
        section.classList.remove("visible");
      });

      // Show the clicked section
      const section = document.querySelector(this.getAttribute("href"));
      if (section) {
        section.classList.remove("hidden");
        section.classList.add("visible");
      }

      // Remove active class from all links
      document.querySelectorAll(".nav-links li").forEach((li) => {
        li.classList.remove("active");
      });

      // Add active class to clicked link
      this.parentElement.classList.add("active");
    }
  });
});
