// Automatically update the copyright year.
document.getElementById("year").textContent = new Date().getFullYear();

// Close the mobile navigation after a navigation link is selected.
document.querySelectorAll("#navbarContent .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navbarContent");
    const collapse = bootstrap.Collapse.getInstance(menu);
    if (collapse) collapse.hide();
  });
});

// Add a subtle background to the navbar after scrolling.
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("navbar-scrolled", window.scrollY > 30);
});
