window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
        document.querySelector(".active").classList.remove("active");
        this.classList.add("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".fade-in").forEach((el) => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
    });
});
document.querySelector(".logo").addEventListener("mouseenter", function () {
    this.classList.add("glow");
});
document.querySelector(".logo").addEventListener("mouseleave", function () {
    this.classList.remove("glow");
});
let index = 0;
function showSlide(n) {
    let slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => (slide.style.display = "none"));
    slides[n].style.display = "block";
}
document.querySelector(".next").addEventListener("click", function () {
    index = (index + 1) % document.querySelectorAll(".slide").length;
    showSlide(index);
});
document.querySelector(".prev").addEventListener("click", function () {
    index = (index - 1 + document.querySelectorAll(".slide").length) %
        document.querySelectorAll(".slide").length;
    showSlide(index);
});
