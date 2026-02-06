document.addEventListener('DOMContentLoaded', () => {
    // Simple Mobile Menu Toggle
    const menuIcon = document.getElementById('mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
