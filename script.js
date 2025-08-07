 var typed = new Typed('#element', {
      strings: ['Web Developer'],
      typeSpeed: 50,
    });

    window.addEventListener('scroll',()=>{
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});




const textarea = document.querySelector('.messageinput');

textarea.addEventListener('input', () => {
  textarea.style.height = 'auto'; // reset
  textarea.style.height = textarea.scrollHeight + 'px';
});
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function(e) {
  navLinks.classList.toggle('active');
  e.stopPropagation(); // Prevent this click from bubbling up to document
});

// Hide nav-links when clicking outside
document.addEventListener('click', function(e) {
  if (navLinks.classList.contains('active')) {
    // If click is outside nav-links and hamburger
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  }
});

// Optional: Hide menu when a nav link is clicked
navLinks.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('active');
  }
});

