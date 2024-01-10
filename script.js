const modeToggle = document.getElementById("modeToggle");
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (isDarkMode) {
    // Dark mode is preferred by the user or set as default
    document.documentElement.setAttribute("data-theme", "dark");
    modeToggle.checked = true; // Set the checkbox to checked
} else {
    // Light mode is preferred by the user
    document.documentElement.setAttribute("data-theme", "light");
    modeToggle.checked = false; // Set the checkbox to unchecked
}

modeToggle.addEventListener("change", () => {
    if (modeToggle.checked) {
        // Dark mode
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        // Light mode
        document.documentElement.setAttribute("data-theme", "light");
    }
});
