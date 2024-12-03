let flag = 0;

function slideshow(num) {

    let slides = document.querySelectorAll(".slide"); // NodeList(4)

    if (num == slides.length) {
        num = 0;
        flag = 0
    }
    if (num < 0) {
        flag = slides.length - 1;
        num = slides.length - 1;
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[num].style.display = "block";
}


let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener('click', () => {
    flag++;
    slideshow(flag)
})
prev.addEventListener('click', () => {
    flag--;
    slideshow(flag);
})
slideshow(flag)