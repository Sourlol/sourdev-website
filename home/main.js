const menuBtn = document.querySelector(".dropdown_mobile button");
const homeBtn = document.getElementById('homeBtn');

document.body.style.zoom = "100%";

menuBtn.addEventListener("click", function () {
    this.classList.toggle("active");
});

homeBtn.addEventListener("click", function () {
    location.href = '/home';
});

