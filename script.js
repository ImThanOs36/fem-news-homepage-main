const toggle = document.querySelector(".nav_toggle");
const nav = document.querySelector(".main_nav");
const show = document.querySelector(".show-for-mob");
const close = document.querySelector(".hide-for-mob");


toggle.addEventListener("click", function run() {


    nav.classList.toggle("show_nav");
    show.classList.toggle("hide-for-mob");
    close.classList.toggle("show-for-mob");
    show.classList.toggle("show-for-mob");
  





})
nav.addEventListener("click", function run() {


    nav.classList.remove("show_nav");


})




