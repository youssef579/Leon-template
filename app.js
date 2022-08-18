let list = document.querySelector('.list');
let navList = document.querySelector('header ul');
let span = document.querySelector(".list div:nth-of-type(even)");

navList.style.display = 'none';
navList.style.right = document.body.getBoundingClientRect().right - list.getBoundingClientRect().right + 7 + 'px';

list.addEventListener('click', function () {
    if (navList.style.display == 'none') {
        navList.style.display = 'block';
        span.style.width = '100%';
    } else {
        span.style.width = '60%';
        navList.style.display = 'none';
    }
})

window.addEventListener("resize", function () {
    navList.style.right = document.body.getBoundingClientRect().right - list.getBoundingClientRect().right + 7 + 'px';
});
