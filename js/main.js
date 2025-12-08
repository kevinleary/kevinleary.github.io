// Main JavaScript Module
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized');

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('section, .project-card, .about-text, .about-image').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Slideshow Logic
    const slideshowConfig = {
        images: [
            'assets/img/portrait.JPG',
            'assets/img/carderock.JPG',
            'assets/img/carrier.jpg',
            'assets/img/gmugrad.jpg',
            'assets/img/handshake.jpg',
            'assets/img/panel.jpg',
            'assets/img/reinvent.jpg'
        ],
        interval: 6000,
        fadeDuration: 500
    };

    const slideshowImg = document.getElementById('about-slideshow');
    let currentImageIndex = 0;

    if (slideshowImg) {
        setInterval(() => {
            // Fade out
            slideshowImg.classList.add('fade-out');

            setTimeout(() => {
                // Change image
                currentImageIndex = (currentImageIndex + 1) % slideshowConfig.images.length;
                slideshowImg.src = slideshowConfig.images[currentImageIndex];

                // Fade in
                slideshowImg.classList.remove('fade-out');
            }, slideshowConfig.fadeDuration);

        }, slideshowConfig.interval);
    }
});
