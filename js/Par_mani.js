document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('nav');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    if (menu && nav) {
        menu.addEventListener('click', () => {
            console.log('Menu clicked');
            nav.classList.toggle('active');
            console.log('Nav classes:', nav.classList);
        });
    } else {
        console.error('Menu or nav element not found');
    }

    function openModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
    }

    function closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }

    window.openModal = openModal;
    window.closeModal = closeModal;

    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
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