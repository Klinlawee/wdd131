// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('nav-menu');

function toggleMenu() {
    navMenu.classList.toggle('active');
    hamburger.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    hamburger.setAttribute('aria-expanded', navMenu.classList.contains('active'));
}

hamburger.addEventListener('click', toggleMenu);

// Update footer with current year and last modified date
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && !e.target.closest('.hamburger') && navMenu.classList.contains('active')) {
        toggleMenu();
    }
});

// Close menu when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMenu();
    }
});

// Filter functionality (placeholder for future implementation)
function filterTemples(criteria) {
    console.log(`Filtering temples by: ${criteria}`);
    // This would be implemented to actually filter the temples
}

// Lazy loading enhancement
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
});