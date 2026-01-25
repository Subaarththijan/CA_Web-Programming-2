const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("mouseenter", () => {
    if (window.innerWidth > 1024) {
      dropdown.classList.add("active");
    }
  });

  dropdown.addEventListener("mouseleave", () => {
    if (window.innerWidth > 1024) {
      dropdown.classList.remove("active");
    }
  });

  dropdown.addEventListener("click", (e) => {
    if (window.innerWidth <= 1024) {
      if (e.target.classList.contains('dropdown-toggle')) {
        e.preventDefault();
      }
      dropdown.classList.toggle("active");
    }
  });
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
}
