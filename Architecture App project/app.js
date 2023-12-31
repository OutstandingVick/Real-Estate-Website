// ========== scroll reveal  =================== //
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.main, nav', { origin: 'top' });
ScrollReveal().reveal('.properties-box', { origin: 'bottom' });
ScrollReveal().reveal('.main h1, .one, .three, .five, .seven', { origin: 'left' });
ScrollReveal().reveal('.main p, .two, .four, .six, .eight', { origin: 'right' });


