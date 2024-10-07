document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('nav');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
    }

    if (menu && nav) {
        menu.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    } else {
        console.error('Menu or nav element not found');
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            // Save the user's preference in localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark-mode');
            } else {
                localStorage.removeItem('theme');
            }
        });
    } else {
        console.error('Dark mode toggle button not found');
    }
});