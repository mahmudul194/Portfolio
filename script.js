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

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});