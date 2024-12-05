// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').replace('.html', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = event.target.getAttribute('href');
        }
    });
});

// Simple form validation for Contact Page
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', event => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            event.preventDefault();
            alert('Please fill out all fields.');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
        }
    });
}

// Add fade-in animation on scroll
function fadeInOnScroll() {
    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
    const viewportHeight = window.innerHeight;

    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < viewportHeight - 50) { // Adjust for slight delay
            element.classList.add('fade-in');
        }
    });
}

// Trigger fade-in animations on scroll
window.addEventListener('scroll', fadeInOnScroll);

// Initial fade-in for elements on page load
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in-on-load').forEach(element => {
        element.classList.add('fade-in');
    });
});

// Add bounce-in animation to navigation links on hover
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('bounce-in');
    });
    link.addEventListener('animationend', () => {
        link.classList.remove('bounce-in'); // Remove animation class after completion
    });
});
