const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("mouseenter", () => {
    if (window.innerWidth > 768) {
      dropdown.classList.add("active");
    }
  });

  dropdown.addEventListener("mouseleave", () => {
    if (window.innerWidth > 768) {
      dropdown.classList.remove("active");
    }
  });

  dropdown.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      if (e.target.classList.contains('dropdown-toggle')) {
        e.preventDefault();
      }
      dropdown.classList.toggle("active");
    }
  });
});
