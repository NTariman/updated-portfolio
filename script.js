// Wait for the DOM to fully load before running code
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // 1. Check for a previously saved theme preference
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        body.classList.add('dark');
        updateButtonText(true);
    } else {
        updateButtonText(false);
    }

    // 2. Add click event listener to the toggle button
    themeToggleBtn.addEventListener('click', () => {
        // Toggle the .dark class on the body element
        const isDarkMode = body.classList.toggle('dark');

        // Save the updated choice to local storage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

        // Update the button's internal text/icon dynamically
        updateButtonText(isDarkMode);
    });

    // Helper function to change the text on the fly
    function updateButtonText(isDark) {
        themeToggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
});