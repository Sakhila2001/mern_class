const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", !expanded);
});

// Dropdown toggle — mobile only
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Only intercept on mobile where nav is a sidebar
    if (window.innerWidth > 900) return;

    e.stopPropagation(); // don't bubble to nav close handlers
    const parent = btn.closest(".has-dropdown");

    // Close all others
    document.querySelectorAll(".has-dropdown").forEach((item) => {
      if (item !== parent) item.classList.remove("open");
    });

    parent.classList.toggle("open");
  });
});

// Close nav when clicking a non-dropdown link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});
