import ScrollReveal from "scrollreveal";

/* SCROLL REVEAL */

const sr = ScrollReveal({
  distance: '60px',
  duration: 2000,
  delay: 200,
  reset: false
});

sr.reveal('.hero-left', {
  origin: 'left'
});

sr.reveal('.hero-right', {
  origin: 'right'
});

sr.reveal('.about-left', {
  origin: 'left'
});

sr.reveal('.about-right', {
  origin: 'right'
});

sr.reveal('.service-card', {
  interval: 200,
  origin: 'bottom'
});

sr.reveal('.client-box', {
  interval: 150,
  origin: 'bottom'
});


/* CLIENTS DATA */

const clients = [

  "Apollo Child Care Hospital",
  "Safeguard - Pitampura",
  "Ashoka Sales (Mangolpuri)",
  "Duck Duck Goose (Rajouri Garden)",
  "Baba Jewellers",
  "Ashoka Engineering",
  "Unitax Automotive",
  "Forum Design Pvt. Ltd.",
  "WP Welfare Society",
  "Pooja Housing Society",
  "DLF Phase 3 Sector 24",
  "RWA Block 11",
  "Sahyog Apartment",
  "UP Block Pitampura",
  "Greenways Pitampura",
  "Shakti Apartment",
  "Rajouri Apartments",
  "Zumbo Smart Bazaar",
  "Paras Fabrics",
  "Skylark Cable & Cords",
  "After Hours Emaya Mall",

  "Saksham Plastic",
  "Paras Fabrics Warehouse",
  "Rani Jhansi Kunj",
  "Pro Ultimate Gym",
  "Ashoka Hightech",
  "BQ Block",
  "AU World School",
  "Noshh Club",
  "Delhi Jal Board",
  "Glory Club",
  "Nirmal Jain",
  "Safeguard Fire Protections",
  "Methodist Church",
  "Thermal Engineer",
  "Hotel Baba Inn",
  "Hotel Royal Mirage",
  "Supreme Motors",
  "CGERWA Welfare Society"

];


/* GENERATE CLIENTS */

const clientsContainer = document.getElementById('clientsContainer');

clients.forEach(client => {

  clientsContainer.innerHTML += `

    <div class="col-lg-3 col-md-6">

      <div class="client-box">
        ${client}
      </div>

    </div>

  `;

});

sr.reveal('.contact-left', {
  origin: 'left'
});

sr.reveal('.contact-right', {
  origin: 'right'
});

/* NAVBAR SCROLL EFFECT */

const navbar = document.querySelector('.custom-navbar');

window.addEventListener('scroll', () => {

  if (window.scrollY > 50) {

    navbar.classList.add('navbar-scrolled');

  } else {

    navbar.classList.remove('navbar-scrolled');

  }

});

/* CONTACT FORM SUBMIT */

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {

  e.preventDefault();

  const formData = {

    fullName: document.getElementById('fullName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    service: document.getElementById('service').value,
    message: document.getElementById('message').value

  };

  try {

    const response = await fetch('https://dabas-security-services.onrender.com/api/inquiries', {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(formData)

    });

    const data = await response.json();

    alert(data.message);

    contactForm.reset();

  } catch (error) {

    alert('Something went wrong');

  }

});

sr.reveal('.trust-card', {

  interval: 200,
  origin: 'bottom'

});