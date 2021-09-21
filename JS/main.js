// Burger Menu

const menuButton = document.querySelector(".menu-btn");
const navList = document.getElementById("nav-list");
const menuPadding = document.getElementById("menu-padding");
const headerFocus = document.querySelector(".focus");
const bodyFocus = document.querySelector(".focus2");
const footerFocus = document.querySelector(".focus3");

let menuOpen = false;
menuButton.addEventListener("click", () => {
  if (!menuOpen) {
    menuButton.classList.add("open");
    navList.classList.add("show");
    headerFocus.classList.add("blur");
    bodyFocus.classList.add("blur");
    footerFocus.classList.add("blur");
    menuOpen = true;
  } else {
    menuButton.classList.remove("open");
    navList.classList.remove("show");
    headerFocus.classList.remove("blur");
    bodyFocus.classList.remove("blur");
    footerFocus.classList.remove("blur");
    menuOpen = false;
  }
});

// Scroll Page Animation

function scrollEventResponsive() {
  let y = window.pageYOffset;
  let x = window.matchMedia("(max-width: 450px)");
  let xx = window.matchMedia("(min-width: 450px) and (max-width: 650px)");
  let X = window.matchMedia("(min-width: 650px)");
  if (
    (y >= 200 && x.matches) ||
    (y >= 300 && xx.matches) ||
    (y >= 400 && X.matches)
  ) {
    menuPadding.classList.add("scroll");
  } else {
    menuPadding.classList.remove("scroll");
  }
}
window.addEventListener("scroll", scrollEventResponsive);
