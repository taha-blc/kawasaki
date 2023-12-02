const slide1 = document.querySelector(".slide-1"),
  slide2 = document.querySelector(".slide-2"),
  slide3 = document.querySelector(".slide-3"),
  dot1 = document.querySelector(".dot-1"),
  dot2 = document.querySelector(".dot-2"),
  dot3 = document.querySelector(".dot-3");

dot1.addEventListener("click", function () {
  slide1.classList.add("active");
  slide2.classList.remove("active");
  slide3.classList.remove("active");
});

dot2.addEventListener("click", function () {
  slide1.classList.remove("active");
  slide2.classList.add("active");
  slide3.classList.remove("active");
});

dot3.addEventListener("click", function () {
  slide1.classList.remove("active");
  slide2.classList.remove("active");
  slide3.classList.add("active");
});

const toggle = document.querySelector(".toggle");
toggle.onclick = function () {
  toggle.classList.toggle("active");
};
