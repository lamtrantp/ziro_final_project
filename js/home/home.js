
// Steps
let collapeTwoOpen = false;
let height = document.querySelector("div.collapetwo").clientHeight;
document.querySelectorAll("div.collapetwo").forEach ((item, index) => {
    item.style.height = "0px";
})

const btns = document.querySelectorAll("div.accordion_item")
btns.forEach ((item, index) => {

    item.addEventListener("click", event => {

        let action = event.target.querySelector("div.collapetwo").style.height;
        
        console.log(action);

        btns.forEach ((item, index) => {
            console.log(item);
            item.querySelector(".collapetwo").style.height = "0px";
            item.querySelector(".accordion-arrow").style.display = "block";
        })
        
        if (action === "0px") {
            event.target.querySelector(".collapetwo").style.height = height + "px";
            event.target.querySelector(".accordion-arrow").style.display = "none";
        } else {
            event.target.querySelector(".collapetwo").style.height = "0px";
            event.target.querySelector(".accordion-arrow").style.display = "block";
        }
    })
})

// featured profile

const carouselSlide = document.querySelector("div.carousel-slide");
const carouselImage = document.querySelectorAll("div.carousel-slide .featured_profile_card_item");


// Button
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn"); 

// counter 
let counter = 1;

const size = carouselImage[1].clientWidth;
console.log(size);
carouselSlide.style.transform = "translateX(" + ((-size)*counter) + "px)";

// Button Listenners

nextBtn.addEventListener("click", ()=>{
    if (counter >= carouselImage.length-1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + ((-size)*counter) + "px)";
    console.log(counter)
})

prevBtn.addEventListener("click", ()=>{
    if (counter <= 0) {
        return;
    }
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + ((-size)*counter) + "px)";
})

carouselSlide.addEventListener("transitionend", ()=>{
    if (carouselImage[counter].id === "last-slide-item") {
        carouselSlide.style.transition = "none";
        counter = carouselImage.length - 5;
        carouselSlide.style.transform = "translateX(" + ((-size)*counter) + "px)";
    }

    if (carouselImage[counter].id === "first-slide-item") {
        carouselSlide.style.transition = "none";
        counter = 1;
        carouselSlide.style.transform = "translateX(" + ((-size)*counter) + "px)";
    }
})