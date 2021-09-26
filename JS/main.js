// Burger Menu

const menuButton = document.querySelector(".menu-btn");
const navList = document.getElementById("nav-list");
const menuPadding = document.getElementById("menu-padding");
const headerFocus = document.querySelector(".focus");
const bodyFocus = document.querySelector(".focus2");
const footerFocus = document.querySelector(".focus3");
const closeNavigationMenu = document.querySelector(".blur");

function addClassToBlur(className) {
  className.classList.add("blur");
}

function removeClassToBlur(className) {
  className.classList.remove("blur");
}

function closeNavigationMenuOnClick(className) {
  className.classList.remove("open");
  className.classList.remove("show");
}

let menuOpen = false;
menuButton.addEventListener("click", () => {
  if (!menuOpen) {
    menuButton.classList.add("open");
    navList.classList.add("show");
    addClassToBlur(headerFocus);
    addClassToBlur(bodyFocus);
    addClassToBlur(footerFocus);
    menuOpen = true;
  } else {
    closeNavigationMenuOnClick(menuButton);
    closeNavigationMenuOnClick(navList);
    removeClassToBlur(headerFocus);
    removeClassToBlur(bodyFocus);
    removeClassToBlur(footerFocus);
    menuOpen = false;
  }
});

document.addEventListener("click", (clickEvent) => {
  if (
    clickEvent.target.id !== "nav-list" &&
    clickEvent.target.id !== "menu-btn"
  ) {
    closeNavigationMenuOnClick(menuButton);
    closeNavigationMenuOnClick(navList);
    removeClassToBlur(headerFocus);
    removeClassToBlur(bodyFocus);
    removeClassToBlur(footerFocus);
    menuOpen = false;
    console.log(clickEvent.target);
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
