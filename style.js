// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list ul");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});

// Fade-in animation on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
