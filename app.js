let list = document.querySelector(".list");
let navList = document.querySelector("header ul");
let span = document.querySelector(".list div:nth-of-type(even)");

navList.style.pointerEvents = "none";
navList.style.opacity = "0";

function checkResize() {
    navList.style.right =
        document.body.getBoundingClientRect().right -
        list.getBoundingClientRect().right + 3 + "px";
}

checkResize();

list.addEventListener("click", function () {
    if (navList.style.opacity == "0") {
        navList.style.pointerEvents = "auto";
        navList.style.opacity = "1";
        navList.style.translate = "0";
        span.style.width = "100%";
    } else {
        span.style.width = "60%";
        navList.style.pointerEvents = "none";
        navList.style.translate = "0 20px";
        navList.style.opacity = "0";
    }
});

window.addEventListener("resize", checkResize);