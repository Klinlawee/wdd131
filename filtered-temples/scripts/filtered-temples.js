// Temple data array with verified image URLs
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/800x500/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/800x500/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/800x500/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/800x500/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/800x500/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/800x500/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/800x500/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Kyiv Ukraine",
        location: "Kyiv, Ukraine",
        dedicated: "2010, August, 29",
        area: 22000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/800x500/kyiv-ukraine-lds-temple-771090-wallpaper.jpg"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x225/sao-paulo-brazil-temple-lds-919303-wallpaper.jpg"
    }
];

// DOM elements
const templeContainer = document.getElementById('temple-container');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('nav-menu');
const currentYearElement = document.getElementById('currentYear');
const lastModifiedElement = document.getElementById('lastModified');

// Set current year and last modified date
currentYearElement.textContent = new Date().getFullYear();
lastModifiedElement.textContent = document.lastModified;

// Function to handle image errors
function handleImageError(img) {
    const placeholder = document.createElement('div');
    placeholder.className = 'image-placeholder';
    placeholder.textContent = img.alt;
    img.parentNode.replaceChild(placeholder, img);
}

// Function to create temple card HTML
function createTempleCard(temple) {
    return `
        <div class="temple-card">
            <div class="temple-info">
                <h2>${temple.templeName}</h2>
                <div class="temple-detail">
                    <strong>LOCATION:</strong>
                    <span>${temple.location}</span>
                </div>
                <div class="temple-detail">
                    <strong>DEDICATED:</strong>
                    <span>${temple.dedicated}</span>
                </div>
                <div class="temple-detail">
                    <strong>SIZE:</strong>
                    <span>${temple.area.toLocaleString()} sq ft</span>
                </div>
            </div>
            <div class="temple-image-container">
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" onerror="handleImageError(this)">
            </div>
        </div>
    `;
}

// Function to display temples based on filter
function displayTemples(filter = 'home') {
    let filteredTemples = [...temples];
    
    switch(filter) {
        case 'old':
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year < 1900;
            });
            break;
        case 'new':
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year > 2000;
            });
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        // 'home' shows all temples
    }
    
    templeContainer.innerHTML = filteredTemples.map(temple => createTempleCard(temple)).join('');
}

// Event listeners for navigation
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const filter = this.getAttribute('data-filter');
        
        // Update active class
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        
        // Display filtered temples
        displayTemples(filter);
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// Hamburger menu toggle
hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Initial display of all temples
displayTemples();
