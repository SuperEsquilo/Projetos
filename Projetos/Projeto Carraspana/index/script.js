// Mobile Menu Toggle
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
    mobileMenuIcon.querySelector('i').classList.toggle('fa-times');
    mobileMenuIcon.querySelector('i').classList.toggle('fa-bars');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        mobileMenuIcon.querySelector('i').classList.remove('fa-times');
        mobileMenuIcon.querySelector('i').classList.add('fa-bars');
    });
});

// Sticky Header on Scroll
const header = document.querySelector('#header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scroll for specific anchor links (optional, if CSS scroll-behavior isn't enough)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
