"use strict";

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    // e.preventDefault();

    // Hide the nav links
    navLinks.classList.remove("show");

    if (this.getAttribute("href") !== "#") {
      // Remove active class from all links
      document.querySelectorAll(".nav-links li").forEach((li) => {
        li.classList.remove("active");
      });

      // Add active class to clicked link
      this.parentElement.classList.add("active");
    }
  });
});

const dropdownToggle = document.querySelector(".custom-dropdown-toggle");
const dropdownMenu = document.querySelector(".custom-dropdown-menu");
const dropdownItems = document.querySelectorAll(".custom-dropdown-menu li");
const contactForm = document.getElementById("contact-form");
const legalForm = document.getElementById("legalForm");
const propertyForm = document.getElementById("propertyForm");
const othersForm = document.getElementById("othersForm");

// Toggle the dropdown menu
dropdownToggle.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
});

// Handle dropdown item selection
dropdownItems.forEach(function (item) {
  item.addEventListener("click", function () {
    const formType = this.getAttribute("data-form-type");

    // Hide all form sections
    legalForm.style.display = "none";
    propertyForm.style.display = "none";
    othersForm.style.display = "none";

    // Show the selected form section
    if (formType === "legal") {
      legalForm.style.display = "block";
    } else if (formType === "property") {
      propertyForm.style.display = "block";
    } else if (formType === "others") {
      othersForm.style.display = "block";
    }

    // Update the dropdown toggle text
    dropdownToggle.textContent = this.textContent;

    // Close the dropdown menu
    dropdownMenu.classList.remove("show");
  });
});

// Close the dropdown menu when clicking outside
window.addEventListener("click", function (event) {
  if (!event.target.matches(".custom-dropdown-toggle")) {
    dropdownMenu.classList.remove("show");
  }
});

window.onscroll = function () {
  var navbar = document.querySelector("nav");
  if (window.pageYOffset > 100) {
    navbar.classList.add("blur");
  } else {
    navbar.classList.remove("blur");
  }
};
