// Selecting DOM elements
const btn = document.querySelector("#submit-btn");
const scrollUp = document.querySelector("#scroll-up");
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("#navigation");
const nav = document.querySelector("nav");
const heading = document.querySelector("#heading");
const navLinks = document.querySelectorAll(".nav-link");

// Submit button click event
btn.addEventListener("click", () => {
    alert("Haven't connected with Express or back-end stuff, so it won't submit the form manually.");
    alert("However, if you want to connect, use kuyajesee@proton.me.");
});

// Scroll up button click event
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

// Burger menu toggle
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Close the burger menu when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    });
});

// Handle scroll event to add/remove background and nav styles
window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop;

    // Toggle classes for the navigation bar when scrolling
    if (scroll > 30) {
        heading.classList.add("background-color");
        nav.classList.add("scrolled");
    } else {
        heading.classList.remove("background-color");
        nav.classList.remove("scrolled");
    }
});
