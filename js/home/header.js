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
    console.log(height);
    item.style.height = "0px";
})

const btns = document.querySelectorAll("div.accordion_item")
btns.forEach ((item, index) => {

    item.addEventListener("click", event => {
        console.log(index);
        console.log(event.target, index);

        let action = event.target.querySelector("div.collapetwo").style.height;
        
        console.log(action);

        btns.forEach ((item, index) => {
            console.log(item);
            item.querySelector(".collapetwo").style.height = "0px";
        })
        
        if (action === "0px") {
            event.target.querySelector(".collapetwo").style.height = height + "px";
        } else {
            event.target.querySelector(".collapetwo").style.height = "0px";
        }
    })
})