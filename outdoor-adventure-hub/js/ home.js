// Home page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Search form functionality
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = this.querySelector('.form-control').value;
            if (searchTerm.trim()) {
                alert(`Searching for: ${searchTerm}\n\nThis would typically redirect to search results.`);
                // In a real implementation, this would redirect to search results
                // window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
            }
        });
    }

    // Newsletter signup
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.form-control').value;
            if (email.trim()) {
                alert(`Thank you for subscribing with: ${email}`);
                this.reset();
            }
        });
    }

    // Event registration
    document.querySelectorAll('.event-item .btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const eventName = this.closest('.event-item').querySelector('h4').textContent;
            alert(`You've registered for: ${eventName}\n\nMore details will be sent to your email.`);
        });
    });
});