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

  // const hamburger = document.querySelector('.hamburger');
  // const navLinks = document.querySelector('nav ul');

  // hamburger.addEventListener('click', () => {
  //   navLinks.classList.toggle('show');
  // });