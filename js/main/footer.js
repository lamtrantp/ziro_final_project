// brand logo
const brandCarouselSlide = document.querySelector("div.brand-carousel-slide");
const brandCarouselImage = document.querySelectorAll("div.brand-carousel-slide div.brand-carousel-slide-item");

let number = 1;

const brandSize = brandCarouselImage[1].clientWidth;
brandCarouselSlide.style.transform = "translateX(" + ((-brandSize)*number) + "px)";

setInterval(function () {
    if (number >= brandCarouselImage.length-1) return;
    brandCarouselSlide.style.transition = "transform 0.4s ease-in-out";
    number++;
    brandCarouselSlide.style.transform = "translateX(" + ((-brandSize)*number) + "px)";
}, 5000)

brandCarouselSlide.addEventListener("transitionend", ()=>{

    if (brandCarouselImage[number].id === "firstSlide") {
        brandCarouselSlide.style.transition = "none";
        number = 1;
        brandCarouselSlide.style.transform = "translateX(" + ((-brandSize)*number) + "px)";
    }
})

let formInput = document.querySelector("input.form_control");

document.querySelector("button.form_btn_inner_sub").onclick = function () {
    console.log(formInput.value);
}