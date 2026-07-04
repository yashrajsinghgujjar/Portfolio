// Simple front-end animations and interactivity

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("main input");

    // Placeholder animation on focus
    input.addEventListener("focus", () => {
        input.placeholder = "Start typing...";
    });

    input.addEventListener("blur", () => {
        input.placeholder = "Search for restaurant, cuisine or a dish";
    });

    // Smooth logo fade-in effect
    const logo = document.querySelector("main img");
    logo.style.opacity = "0";
    setTimeout(() => {
        logo.style.transition = "opacity 1.5s ease";
        logo.style.opacity = "1";
    }, 300);

    // Floating animation effect for logo
    setInterval(() => {
        logo.style.transform = "translateY(-10px)";
        setTimeout(() => {
            logo.style.transform = "translateY(0)";
        }, 500);
    }, 2000);
});
