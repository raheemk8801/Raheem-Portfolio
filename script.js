// Rotating titles in hero section
const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer"
];

const roleRotator = document.getElementById("role-rotator");
let roleIndex = 0;

function rotateRole() {
  if (!roleRotator) return;

  roleIndex = (roleIndex + 1) % roles.length;

  // Reset animation by changing text and forcing reflow
  roleRotator.style.animation = "none";
  // Trigger reflow
  void roleRotator.offsetWidth;

  roleRotator.textContent = roles[roleIndex];
  roleRotator.style.animation = "";
  roleRotator.classList.add("hero__loop-text");
}

setInterval(rotateRole, 2200);

// Skill filters
const filterButtons = document.querySelectorAll(".skills-filter-btn");
const skillPills = document.querySelectorAll(".skill-pill");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    // Active state on buttons
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Show/hide skills
    skillPills.forEach((pill) => {
      const category = pill.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        pill.classList.remove("hidden");
      } else {
        pill.classList.add("hidden");
      }
    });
  });
});

// Scroll reveal animations
const scrollElements = document.querySelectorAll(".scroll-reveal");

const observerOptions = {
  threshold: 0.15
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

scrollElements.forEach((el) => scrollObserver.observe(el));

// Optional: simple prevent default for contact form (so page doesn't reload)
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! You can wire this form to your backend or a form service.");
  });
}

// MOBILE NAV TOGGLE
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.classList.toggle("is-open");
    navLinks.classList.toggle("nav__links--open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

