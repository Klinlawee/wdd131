// Contact-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('form-success');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'red';
                } else {
                    field.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Show success message
            if (formSuccess) {
                formSuccess.style.display = 'block';
                contactForm.reset();
                
                // Scroll to success message
                formSuccess.scrollIntoView({ behavior: 'smooth' });
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 5000);
            } else {
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            }
        });
        
        // Clear field errors on input
        contactForm.querySelectorAll('input, textarea, select').forEach(field => {
            field.addEventListener('input', function() {
                this.style.borderColor = '';
            });
        });
        
        // Show/hide hike-related fields based on subject
        const subjectSelect = document.getElementById('subject');
        const hikeDateField = document.getElementById('hike-date')?.parentElement;
        const trailNameField = document.getElementById('trail-name')?.parentElement;
        
        if (subjectSelect && hikeDateField && trailNameField) {
            subjectSelect.addEventListener('change', function() {
                if (this.value === 'trail-report') {
                    hikeDateField.style.display = 'block';
                    trailNameField.style.display = 'block';
                } else {
                    hikeDateField.style.display = 'none';
                    trailNameField.style.display = 'none';
                }
            });
            
            // Trigger change event to set initial state
            subjectSelect.dispatchEvent(new Event('change'));
        }
    }
    
    // Auto-fill current date for hike date
    const hikeDateField = document.getElementById('hike-date');
    if (hikeDateField) {
        hikeDateField.valueAsDate = new Date();
    }
});