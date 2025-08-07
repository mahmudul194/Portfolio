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

