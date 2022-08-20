let isOpen = false;
let button = document.getElementById("nav_menu_icon");
button.addEventListener("click", function() {
    if (isOpen) {
        isOpen = false;
        document.getElementById("main").style.top = "0";
        // document.getElementById("header_nav_secondary").style.opacity = "0";
    } else {
        isOpen = true;
        document.getElementById("main").style.top = "230px";
        // document.getElementById("header_nav_secondary").style.opacity = "1";
    }
})



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


// const nextBtn = document.querySelector("button#featured-profile-btn-next");

// const previousBtn = document.querySelector("button#featured-profile-btn-previous");

// const slider = document.querySelector("div.featured_profile_card_list");

// let firstSlide;
// let lastSlide;

// const projects = document.querySelectorAll("div.featured_profile_card_item");

// projects.forEach((item, index) => {
//     console.log(index);
//     item.classList.add("slide_content")
//     if (index < 2) {
//         item.classList.add("slide_item_pre");
//     }
//     if (index === 2) {
//         firstSlide = item;
//         item.classList.add("active")
//     }

//     if (index === 3) {
//         item.classList.add("slide_item2");
//     }
//     if (index === 4) {
//         item.classList.add("slide_item3");
//     }
//     if (index === 5) {
//         item.classList.add("slide_item4");
//         lastSlide = item;
//     }

//     if (index > 5) {
//         item.classList.add("slide_item_next")
//     }
    
    
// })

// nextBtn.addEventListener('click', () => {
//     const active_slide = document.querySelector('.featured_profile_card_item.active');

//     const slide_end = document.querySelector(".featured_profile_card_item.slide_item4")

//     let sibling = active_slide.nextElementSibling;
//     let next_slide = slide_end.nextElementSibling;
//     if (next_slide == null || !sibling.classList.contains('featured_profile_card_item')) {
//         next_slide = firstSlide;
//     }
//     console.log(sibling);

//     if (sibling.classList.contains("featured_profile_card_item")) {
//         active_slide.classList.remove('active');
//         sibling.classList.add('active');
//     }

// });

// previousBtn.addEventListener('click', () => {
//     const active_slide = document.querySelector('.featured_profile_card_item.active');
//     let sibling = active_slide.previousElementSibling;
//     if (sibling == null || !sibling.classList.contains('featured_profile_card_item')) {
//         sibling = lastSlide;
//         console.log(sibling);
//     }
    

//     if (sibling.classList.contains('featured_profile_card_item')) {
//         active_slide.classList.remove('active');
//         sibling.classList.add('active');
//     }
// });