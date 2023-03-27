"use strict";
// /////////////////// Nav bar  //////////////////////////////////
const modal = document.querySelector(".modalel");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
let navtogglebtn = document.querySelector(".hamburger");
let collapsenavbar = document.getElementById("mobile-navbar");
let navlogo = document.querySelector(".nav__logo");

let state = false;

navtogglebtn.addEventListener("click", toggle);

function toggle() {
  state = !state;

  if (state == true) {
    collapsenavbar.classList.remove("mobile-navbar-edit");
    collapsenavbar.classList.remove("animation-class-remove-nav");
    collapsenavbar.classList.add("animation-class-nav");
    navlogo.classList.add("nav__logo-mobile-edit");
    collapsenavbar.style.left = "0px";

    console.log("showing");
  } else {
    collapsenavbar.classList.add("mobile-navbar-edit");
    collapsenavbar.classList.add("animation-class-remove-nav");
    collapsenavbar.classList.remove("animation-class-nav");
    navlogo.classList.remove("nav__logo-mobile-edit");
    collapsenavbar.style.left = "-45%";

    console.log("hidden");
  }
}
// Modal Window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
