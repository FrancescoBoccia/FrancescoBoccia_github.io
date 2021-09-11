//  Hamburger Menu

const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const closeMenu = document.querySelector(".closeMenu");

function toggleButton() {
  navList.classList.toggle("show");
  hamburgerButton.classList.toggle("remove");
  closeMenu.classList.toggle("closeNav");
}

hamburgerButton.addEventListener("click", toggleButton);
closeMenu.addEventListener("click", toggleButton);

// Scroll Page Animation

function scrollEventResponsive() {
  let y = window.pageYOffset;
  let x = window.matchMedia("(max-width: 450px)")
  let xx = window.matchMedia("(min-width: 450px) and (max-width: 650px)")
  let X = window.matchMedia("(min-width: 650px)")
  if (y >= 200 && x.matches || y >= 300 && xx.matches || y >= 400 && X.matches) {
    hamburgerButton.classList.add("scroll");
  } else {
    hamburgerButton.classList.remove("scroll");
  }
}
window.addEventListener("scroll", scrollEventResponsive);