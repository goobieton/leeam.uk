const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("change", () => {
    if (modeToggle.checked) {
        // Dark mode
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        // Light mode
        document.documentElement.setAttribute("data-theme", "light");
    }
});
