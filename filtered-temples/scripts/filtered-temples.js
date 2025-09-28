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
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 40000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/800x500/1-Rome-Temple-2160936.jpg"
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
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/800x500/sao-paulo-brazil-temple-lds-919303-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/800x500/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/800x500/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "Kirtland Ohio",
        location: "Kirtland, Ohio, United States",
        dedicated: "1836, March, 27",
        area: 15000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kirtland-ohio/800x500/kirtland-ohio-temple-lds-694082-wallpaper.jpg"
    },
    {
        templeName: "Atlanta Georgia",
        location: "Atlanta, Georgia, United States",
        dedicated: "1983, June, 1",
        area: 34947,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/800x500/atlanta-georgia-temple-lds-82744-wallpaper.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/800x500/provo-city-center-temple-1178033-wallpaper.jpg"
    },
    {
        templeName: "Provo Utah",
        location: "Provo, Utah, United States",
        dedicated: "1972, February, 9",
        area: 128969,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-utah/800x500/provo-utah-temple-lds-885489-wallpaper.jpg"
    },
    {
        templeName: "Nauvoo Illinois",
        location: "Nauvoo, Illinois, United States",
        dedicated: "2002, June, 27",
        area: 54000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/800x500/nauvoo-temple-756499-wallpaper.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/800x500/san-diego-temple-765109-wallpaper.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 119236,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/800x500/logan-utah-temple-lds-2196399-wallpaper.jpg"
    },
    {
        templeName: "St. George Utah",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/800x500/st-george-utah-temple-lds-956084-wallpaper.jpg"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/800x500/johannesburg-south-africa-temple-lds-786390-wallpaper.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Manila, Philippines",
        dedicated: "1984, September, 25",
        area: 26783,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/800x500/manila-philippines-temple-lds-993617-wallpaper.jpg"
    },
    {
        templeName: "Seoul Korea",
        location: "Seoul, South Korea",
        dedicated: "1985, December, 14",
        area: 28057,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/800x500/seoul-korea-temple-lds-273986-wallpaper.jpg"
    },
    {
        templeName: "Bangkok Thailand",
        location: "Bangkok, Thailand",
        dedicated: "2019, October, 22",
        area: 10982,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bangkok-thailand/800x500/bangkok-thailand-temple-rendering-1078085-wallpaper.jpg"
    },
    {
        templeName: "Auckland New Zealand",
        location: "Auckland, New Zealand",
        dedicated: "1958, April, 21",
        area: 45331,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/auckland-new-zealand/800x500/auckland-new-zealand-temple-lds-811746-wallpaper.jpg"
    },
    {
        templeName: "Sydney Australia",
        location: "Sydney, Australia",
        dedicated: "1984, September, 20",
        area: 30671,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sydney-australia/800x500/sydney-australia-temple-lds-767036-wallpaper.jpg"
    },
    {
        templeName: "London England",
        location: "London, England, United Kingdom",
        dedicated: "1958, September, 7",
        area: 42852,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/800x500/london-england-temple-lds-650239-wallpaper.jpg"
    },
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017, May, 21",
        area: 44075,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/800x500/paris-france-temple-exterior-1905503.jpg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Bern, Switzerland",
        dedicated: "1955, September, 11",
        area: 35000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/800x500/bern-switzerland-temple-lds-746013-wallpaper.jpg"
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