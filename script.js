// Navigation and Interaction Handler
class PortfolioInteractions {
    constructor() {
        this.navDots = document.querySelectorAll('.nav-dot');
        this.mouseMagnetRadius = 100;
        this.init();
    }

    init() {
        this.setupMouseAttraction();
        this.setupNavigation();
        this.setupScrollTracking();
        this.setupAnimationObserver();
    }

    // Mouse attraction effect for navigation dots
    setupMouseAttraction() {
        document.addEventListener('mousemove', (e) => {
            this.navDots.forEach(dot => {
                const rect = dot.getBoundingClientRect();
                const dotCenterX = rect.left + rect.width / 2;
                const dotCenterY = rect.top + rect.height / 2;

                const distance = Math.sqrt(
                    Math.pow(e.clientX - dotCenterX, 2) +
                    Math.pow(e.clientY - dotCenterY, 2)
                );

                if (distance < this.mouseMagnetRadius) {
                    const attraction = 1 - (distance / this.mouseMagnetRadius);
                    const moveX = (e.clientX - dotCenterX) * attraction * 0.3;
                    const moveY = (e.clientY - dotCenterY) * attraction * 0.3;

                    dot.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + attraction * 0.5})`;
                    dot.style.background = `rgba(255, 255, 255, ${0.3 + attraction * 0.7})`;
                } else {
                    dot.style.transform = 'translate(0, 0) scale(1)';
                    dot.style.background = 'rgba(255, 255, 255, 0.3)';
                }
            });
        });
    }

    // Navigation functionality
    setupNavigation() {
        this.navDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const targetSection = dot.getAttribute('data-section');
                this.scrollToSection(targetSection);
            });
        });
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // Update active dot on scroll
    setupScrollTracking() {
        window.addEventListener('scroll', () => {
            const sections = ['header', 'about', 'projects', 'interests'];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((sectionId, index) => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        this.navDots.forEach(dot => dot.classList.remove('active'));
                        if (this.navDots[index]) {
                            this.navDots[index].classList.add('active');
                        }
                    }
                }
            });
        });
    }

    // Intersection Observer for animations
    setupAnimationObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections for animations
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });
    }
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioInteractions();
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
