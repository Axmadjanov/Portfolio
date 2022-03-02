const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");
const stikyOpen = document.getElementById("stikyOpen");
const stiky = document.getElementById("stiky");
const stiky2 = document.getElementById("stiky2");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    console.log("hi");
    navMenu.classList.remove("show-menu");
  });
}
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
stikyOpen.addEventListener("click", () => {
  stiky.classList.remove("olibchiq");
});
stiky2.addEventListener("click", () => {
  stiky.classList.add("olibchiq");
});

navLink.forEach((n) => n.addEventListener("click", linkAction));
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 25,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
