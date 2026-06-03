document.addEventListener("DOMContentLoaded", () => {

    console.log("JS loaded");

    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");

    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    window.addEventListener("load", () => {
        document.body.style.opacity = "1";
    });

});
