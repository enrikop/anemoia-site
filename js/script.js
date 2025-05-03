gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.glitch-gsap').forEach(el => {
  let glitchInterval;

  const glitch = () => {
    const tl = gsap.timeline();
    for (let i = 0; i < 5; i++) {
      tl.to(el, {
        x: gsap.utils.random(-3, 3),
        textShadow: `${gsap.utils.random(-2, 2)}px 0 #ff0055, ${gsap.utils.random(-2, 2)}px 0 #00f6ff`,
        duration: 0.04
      });
    }
    tl.to(el, {
      x: 0,
      textShadow: '0px 0 #000',
      duration: 0.1,
      clearProps: 'textShadow'
    });
  };

  el.addEventListener('mouseenter', () => {
    glitch(); // primo glitch immediato
    glitchInterval = setInterval(glitch, 500); // glitcha ogni mezzo secondo
  });

  el.addEventListener('mouseleave', () => {
    clearInterval(glitchInterval);
    gsap.to(el, { x: 0, textShadow: '0px 0 #000', duration: 0.1, clearProps: 'textShadow' });
  });
});

const track = document.querySelector('.carousel-track');
const btnLeft = document.querySelector('.carousel-button.left');
const btnRight = document.querySelector('.carousel-button.right');

btnLeft.addEventListener('click', () => {
  track.scrollBy({ left: -300, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  track.scrollBy({ left: 300, behavior: 'smooth' });
});


window.addEventListener("DOMContentLoaded", () => {
  
  gsap.to("#dropMarquee span", {
    x: "-150vw",
    ease: "none",
    scrollTrigger: {
      trigger: ".drop-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    }
  });

  gsap.from(".letter", {
      opacity: 0,
      x: () => gsap.utils.random(-40, 40),
      y: -20,
      stagger: 0.5,
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".manifesto-title-vertical",
        start: "top 80%", // quando il 20% sopra è visibile
        end: "bottom top",
        scrub: true, // 👈 fa animare basato sullo scroll, non sul tempo
      }
  });


  gsap.from("#ritual-typed span", {
    opacity: 0,
    y: -10,
    stagger: 0.2, // una lettera ogni 0.05s
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#ritual-typed",
      start: "top 80%",
      end: "top 30%",
      scrub: false,
      once: true,
    }});

});

const header = document.querySelector('.anemoia-header');

window.addEventListener('scroll', () => {
  const dropSection = document.querySelector('.drop-section');
  const dropOffset = dropSection.offsetTop;

  if (window.scrollY >= dropOffset - 80) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


