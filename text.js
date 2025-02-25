document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const logo = document.getElementById("logo");

    console.log("Script Loaded!"); // Debugging step

    // Check if localStorage has a saved theme
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggle.textContent = "🌞";
        logo.src = "images/gadzit-logo-light.png"; // Light mode logo
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", function() {
        console.log("Button Clicked!"); // Debugging step

        if (body.classList.contains("light-mode")) {
            body.classList.remove("light-mode");
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "🌙";
            logo.src = "images/gadzit-logo.png"; // Dark mode logo
        } else {
            body.classList.add("light-mode");
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌞";
            logo.src = "images/gadzit-logo-light.png"; // Light mode logo
        }
    });
});
