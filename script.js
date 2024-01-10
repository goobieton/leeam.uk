const toggleCheckbox = document.querySelector(".toggle-checkbox");

// Function to toggle the theme based on the checkbox state
function toggleTheme() {
    const isDarkMode = toggleCheckbox.checked;

    if (isDarkMode) {
        // Dark mode
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        // Light mode
        document.documentElement.setAttribute("data-theme", "light");
    }
}

// Initial state based on the checkbox
toggleTheme();

// Listen for changes in the checkbox state
toggleCheckbox.addEventListener("change", toggleTheme);
