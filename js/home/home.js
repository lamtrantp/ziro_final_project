// banner
const bannerCarouselSlide = document.querySelector("div.banner-swiper-slider");
const bannerCarouselItem = document.querySelectorAll("div.banner-swiper-item");

const bannerPrev = document.querySelector("div.banner-pagination-prev");
const bannerNext = document.querySelector("div.banner-pagination-next");

const bannerItemWidth = bannerCarouselItem[0].clientWidth;
console.log(bannerItemWidth);
bannerCarouselItem[0].classList.add("banner-display")

bannerNext.addEventListener("click", () => {
    let bannerDisplay = document.querySelector("div.banner-swiper-item.banner-display");
    let sibling = bannerDisplay.nextElementSibling;
    if (sibling != null) {
        bannerCarouselSlide.style.transition = "transform 0.4s ease-in-out";
        bannerCarouselSlide.style.transform = "translateX(" + (-bannerItemWidth) + "px)";
        bannerDisplay.classList.remove("banner-display");
        sibling.classList.add("banner-display")

        bannerNext.style.width = "45px";
        bannerNext.style.transition = "width 0.4s ease-in-out";
        bannerPrev.style.width = "25px";
        bannerPrev.style.transition = "width 0.4s ease-in-out";
        bannerNext.style.background = "#5F4BDB";
        bannerPrev.style.background = "#D7D0FB";
    }
})

bannerPrev.addEventListener("click", () => {
    let bannerDisplay = document.querySelector("div.banner-swiper-item.banner-display");
    let sibling = bannerDisplay.previousElementSibling;
    if (sibling != null) {
        bannerCarouselSlide.style.transition = "transform 0.4s ease-in-out";
        bannerCarouselSlide.style.transform = "translateX(" + 0 + "px)";
        bannerDisplay.classList.remove("banner-display");
        sibling.classList.add("banner-display")
    }

    bannerNext.style.width = "25px";
    bannerNext.style.transition = "width 0.4s ease-in-out";
    bannerPrev.style.width = "45px";
    bannerPrev.style.transition = "width 0.4s ease-in-out";
    bannerNext.style.background = "#D7D0FB";
    bannerPrev.style.background = "#5F4BDB";
})


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

function debounce(fn, delay) {
    let timeoutID;
    return function(...args){
        if(timeoutID) clearTimeout(timeoutID);
        timeoutID = setTimeout(()=>{
          fn(...args)
        }, delay);
    }
}

// Button Listenners

nextBtn.addEventListener("click", debounce(()=>{
    if (counter >= carouselImage.length-1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + ((-size)*counter) + "px)";
    console.log(counter)
}, 250))

prevBtn.addEventListener("click", debounce(()=>{
    if (counter <= 0) {
        return;
    }
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + ((-size)*counter) + "px)";
}, 250))

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


// Latest news

const latestNewSlide = document.querySelector("div.latest-new-slide");
const latestNewItems = document.querySelectorAll("div.latest-new-slide-item");

const latestNewSelect1 = document.querySelector("div.latest-new-select-item1");
const latestNewSelect2 = document.querySelector("div.latest-new-select-item2");
const latestNewSelect3 = document.querySelector("div.latest-new-select-item3");

let latestNewWidth1 = latestNewItems[0].clientWidth;

latestNewSelect1.addEventListener("click", () => {
    latestNewSlide.style.transition = "transform 0.4s ease-in-out";
    latestNewSlide.style.transform = "translateX(0px)";

    latestNewSelect1.style.transition = "width 0.4s ease-in-out";
    latestNewSelect1.style.width = "100px";
    latestNewSelect1.style.background = "#5F4BDB"    
    latestNewSelect2.style.width = "40px";
    latestNewSelect2.style.background = "#D7D0FB"    
    latestNewSelect3.style.width = "40px";
    latestNewSelect3.style.background = "#D7D0FB"    
})

latestNewSelect2.addEventListener("click", () => {
    latestNewSlide.style.transition = "transform 0.4s ease-in-out";
    latestNewSlide.style.transform = "translateX(" + (-latestNewWidth1) + "px)";

    latestNewSelect2.style.transition = "width 0.4s ease-in-out";
    latestNewSelect2.style.width = "100px";
    latestNewSelect2.style.background = "#5F4BDB"    
    latestNewSelect1.style.width = "40px";
    latestNewSelect1.style.background = "#D7D0FB"    
    latestNewSelect3.style.width = "40px";
    latestNewSelect3.style.background = "#D7D0FB" 
})

latestNewSelect3.addEventListener("click", () => {
    latestNewSlide.style.transition = "transform 0.4s ease-in-out";
    latestNewSlide.style.transform = "translateX(" + ((-latestNewWidth1)*2) + "px)";

    latestNewSelect3.style.transition = "width 0.4s ease-in-out";
    latestNewSelect3.style.width = "100px";
    latestNewSelect3.style.background = "#5F4BDB"    
    latestNewSelect2.style.width = "40px";
    latestNewSelect2.style.background = "#D7D0FB"    
    latestNewSelect1.style.width = "40px";
    latestNewSelect1.style.background = "#D7D0FB" 
})