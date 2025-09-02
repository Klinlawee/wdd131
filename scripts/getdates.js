   // JavaScript for dynamic dates
        document.addEventListener('DOMContentLoaded', function() {
            // Set current year
            const currentYear = new Date().getFullYear();
            const yearSpan = document.getElementById('currentyear');
            if (yearSpan) {
                yearSpan.textContent = currentYear;
            }

            // Set last modified date
            const lastModifiedElement = document.getElementById('lastModified');
            if (lastModifiedElement) {
                const lastMod = document.lastModified;
                // Format the date to match your example: 01/09/2025 12:13:33
                const date = new Date(lastMod);
                const formattedDate = date.toLocaleDateString('en-GB').replace(/\//g, '/') + ' ' + 
                                    date.toLocaleTimeString('en-GB', { hour12: false });
                lastModifiedElement.textContent = `Last modification: ${formattedDate}`;
            }
        });