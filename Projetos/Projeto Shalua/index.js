// JavaScript for Shalua Website

document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }

    // Scroll Animation Observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Hero Slideshow Logic
    const heroBg = document.querySelector('.hero-bg');
    const heroImages = [
        'assets/fashion_model_hero_final_1770300863647.png',
        // 'assets/hero_bg_1769394636321.png',
        // Add your own image paths here
        // 'assets/your_image_1.jpg',
        // 'assets/your_image_2.jpg'
    ];

    // Set initial image (Static)
    if (heroBg && heroImages.length > 0) {
        heroBg.style.backgroundImage = `url('${heroImages[0]}')`;
    }

    let currentImageIndex = 0;

    // Slideshow interval removed per user request for a static photo
    /*
    function changeHeroBackground() {
        if (heroImages.length > 1) {
            currentImageIndex = (currentImageIndex + 1) % heroImages.length;
            const nextImageUrl = heroImages[currentImageIndex];
            heroBg.style.backgroundImage = `url('${nextImageUrl}')`;
        }
    }

    if (heroImages.length > 1) {
        setInterval(changeHeroBackground, 5000);
    }
    */

    // Header Background on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(0, 31, 98, 0.95)';
        } else {
            header.style.padding = '20px 0';
            header.style.backgroundColor = 'rgba(0, 31, 98, 0.85)'; // Back to transparent-ish
        }
    });
});
