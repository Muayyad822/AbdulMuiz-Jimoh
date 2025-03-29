// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  const isHidden = mobileMenu.classList.contains('hidden');
  
  if (isHidden) {
    mobileMenu.classList.remove('hidden');
    setTimeout(() => {
      mobileMenu.classList.remove('opacity-0');
      mobileMenu.classList.remove('-translate-y-2'); // Changed from -translate-y-5
    }, 20);
  } else {
    mobileMenu.classList.add('opacity-0');
    mobileMenu.classList.add('-translate-y-2'); // Changed from -translate-y-5
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 300);
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('opacity-0');
    mobileMenu.classList.add('-translate-y-2'); // Changed from -translate-y-5
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 300);
  });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

if (localStorage.getItem('color-theme') === 'dark' || 
    (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  html.classList.add('dark');
} else {
  html.classList.remove('dark');
}

themeToggle.addEventListener('click', () => {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
  }
});

// Update footer year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Form handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const phoneNumber = '2348169017058';
    const name = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const formattedMessage = `Name: ${name} 
Email: ${email} 
Subject: ${subject} 
Message: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`;

    window.open(whatsappURL, '_blank');
});

// Text Change Animation
const textChange = document.querySelector('#textChange');
let toggle = true;

setInterval(() => {
  textChange.textContent = toggle ? 'Web Designer' : 'Web Developer';
  toggle = !toggle;
}, 1800);
