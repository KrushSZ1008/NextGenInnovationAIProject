
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNavbar");

  if (window.scrollY > 50) {
    navbar.classList.add("navbar-shadow");
  } else {
    navbar.classList.remove("navbar-shadow");
  }
});
