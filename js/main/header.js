// header nav secondary
let isOpen = false;
const button = document.getElementById("nav_menu_icon");

const btnSecondary = document.querySelector(".header_nav_btn_icon");
const headerNav = document.getElementById("header_nav_secondary")
let heightNav = headerNav.clientHeight;

headerNav.style.height = "0px";

button.addEventListener("click", function() {
    if (isOpen) {
        isOpen = false;
        headerNav.style.height = "0px";
    } else {
        isOpen = true;
        headerNav.style.height = heightNav + "px";
    }
})

btnSecondary.addEventListener("click", function() {
    if (isOpen) {
        isOpen = false;
        headerNav.style.height = "0px";
    } else {
        isOpen = true;
        headerNav.style.height = heightNav + "px";
    }
})
