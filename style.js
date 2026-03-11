// ===== Hamburger Menu Toggle =====
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list ul");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
    hamburger.classList.toggle("toggle");
  });
}

// ===== Close Menu on Link Click =====
document.querySelectorAll(".nav-list a").forEach(link => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
    hamburger.classList.remove("toggle");
  });
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// ===== Fade-in Animation on Scroll =====
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