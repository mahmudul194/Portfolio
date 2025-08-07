var typed = new Typed('#element', {
      strings: ['Web Developer'],
      typeSpeed: 50,
    });

let lastScrollY = window.scrollY;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.innerWidth <= 850) {
    if (window.scrollY < lastScrollY) {
      // Scrolling up
      navbar.classList.add('navbar-fixed');
      navbar.style.top = '0';
    } else {
      // Scrolling down
      navbar.style.top = '-100px'; // Hide navbar
      setTimeout(() => navbar.classList.remove('navbar-fixed'), 300);
    }
    lastScrollY = window.scrollY;
  } else {
    // Desktop: transparent when scrolling down, solid otherwise
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    navbar.classList.add('navbar-fixed');
    navbar.style.top = '0';
  }
});




const textarea = document.querySelector('.messageinput');

textarea.addEventListener('input', () => {
  textarea.style.height = 'auto'; 
  textarea.style.height = textarea.scrollHeight + 'px';
});
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function(e) {
  navLinks.classList.toggle('active');
  e.stopPropagation(); 
});


document.addEventListener('click', function(e) {
  if (navLinks.classList.contains('active')) {
    
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  }
});


navLinks.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('active');
  }
});

