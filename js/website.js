/* SCROLL REVEAL (ANIMACIONES) */ 

window.sr = ScrollReveal();
      sr.reveal('.navbar', {
    duration: 2000,
    origin: 'buttom'
});

window.sr = ScrollReveal();
      sr.reveal('.header-content-left', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

window.sr = ScrollReveal();
      sr.reveal('.header-content-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});
window.sr = ScrollReveal();
      sr.reveal('.header-btn', {
    duration: 2000,
    origin: 'bottom',
    delay: 1500
});

/* SMOOTH SCROLLING (FLUIDEZ AL DESPLAZAR) */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});