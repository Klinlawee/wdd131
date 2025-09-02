// JavaScript for dynamic dates - WDD 131 Course Landing Page
// Author: Godson Morrison Halm

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in the footer
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }

    // Set last modified date in the footer
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        const lastMod = document.lastModified;
        // Format the date to match the assignment example format
        const date = new Date(lastMod);
        const formattedDate = date.toLocaleDateString('en-GB').replace(/\//g, '/') + ' ' + 
                            date.toLocaleTimeString('en-GB', { hour12: false });
        lastModifiedElement.textContent = `Last modification: ${formattedDate}`;
    }

    // Optional: Add some interactivity to the cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Console log for debugging (remove in production)
    console.log('WDD 131 Course Landing Page loaded successfully!');
    console.log('Current year:', currentYear);
    console.log('Last modified:', document.lastModified);
});