// script.js

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-btn");
    const mobileNav = document.querySelector(".mobile-nav");

    // Toggle the mobile menu visibility when the hamburger button is clicked
    menuButton.addEventListener("click", function () {
        mobileNav.classList.toggle("show");
    });

    // Intersection Observer for fade-in animation (existing feature)
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    elements.forEach(element => observer.observe(element));
});
