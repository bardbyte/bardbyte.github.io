document.addEventListener('DOMContentLoaded', () => {
    const themeCheckbox = document.getElementById('theme-checkbox-input');
    const htmlElement = document.documentElement; // Gets the <html> element

    // Function to apply theme based on preference
    function applyTheme(theme) {
        if (theme === 'dark') {
            htmlElement.classList.add('dark-mode');
            if (themeCheckbox) {
                themeCheckbox.checked = true;
            }
        } else {
            htmlElement.classList.remove('dark-mode');
            if (themeCheckbox) {
                themeCheckbox.checked = false;
            }
        }
    }

    // Function to save theme preference
    function saveThemePreference(theme) {
        localStorage.setItem('theme', theme);
    }

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Optional: Check for OS preference if no saved theme
        // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        // if (prefersDark) {
        //     applyTheme('dark');
        // } else {
        //     applyTheme('light'); // Default to light if no preference
        // }
        applyTheme('light'); // Default to light if no preference
    }

    // Event listener for the theme toggle
    if (themeCheckbox) {
        themeCheckbox.addEventListener('change', () => {
            if (themeCheckbox.checked) {
                applyTheme('dark');
                saveThemePreference('dark');
            } else {
                applyTheme('light');
                saveThemePreference('light');
            }
        });
    }
});
