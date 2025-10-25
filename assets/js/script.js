/**
 * Measurement Scales Reference Guide
 * Interactive JavaScript
 */

(function() {
    'use strict';

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for sticky nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active state to navigation on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function highlightNav() {
        let scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav);

    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply fade-in to cards
    document.querySelectorAll('.card, .doc-card, .impact-card, .pathway-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(card);
    });

    // Mobile menu toggle (if needed in future)
    const createMobileMenu = () => {
        const navMenu = document.querySelector('.nav-menu');
        const navbar = document.querySelector('.navbar .container');

        if (window.innerWidth <= 768 && navMenu) {
            navMenu.style.display = 'none';

            // Create hamburger menu button if it doesn't exist
            if (!document.querySelector('.mobile-menu-toggle')) {
                const menuToggle = document.createElement('button');
                menuToggle.className = 'mobile-menu-toggle';
                menuToggle.innerHTML = '☰';
                menuToggle.style.cssText = 'background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; display: none;';

                if (window.innerWidth <= 768) {
                    menuToggle.style.display = 'block';
                }

                navbar.appendChild(menuToggle);

                menuToggle.addEventListener('click', () => {
                    if (navMenu.style.display === 'none') {
                        navMenu.style.display = 'flex';
                        navMenu.style.flexDirection = 'column';
                        navMenu.style.position = 'absolute';
                        navMenu.style.top = '100%';
                        navMenu.style.left = '0';
                        navMenu.style.right = '0';
                        navMenu.style.backgroundColor = '#000';
                        navMenu.style.padding = '1rem';
                    } else {
                        navMenu.style.display = 'none';
                    }
                });
            }
        } else if (navMenu) {
            navMenu.style.display = 'flex';
        }
    };

    // Handle window resize
    window.addEventListener('resize', createMobileMenu);
    createMobileMenu();

    // Console message
    console.log('%c Measurement Scales Reference Guide ', 'background: #000; color: #fff; padding: 5px 10px; font-size: 14px;');
    console.log('%c Version 1.0 | Maintained by Vinay Thakur ', 'color: #666; font-size: 12px;');
    console.log('%c https://github.com/vtmade/Measurement-Scales ', 'color: #666; font-size: 12px;');

})();
