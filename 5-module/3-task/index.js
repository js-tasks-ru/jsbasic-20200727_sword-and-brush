function initCarousel() {

  let value = 0;
  let counter = document.querySelector(".carousel__inner").offsetWidth;
  let slider = document.querySelector(".carousel__inner");
  let left = document.querySelector(".carousel__arrow_left");
  let right = document.querySelector(".carousel__arrow_right");

  left.style.display = "none";

  let slideRight = () => {
    slider.style.transform = `translateX(${value -= counter}px)`;

    if (value === -(counter * 3)) {
      right.style.display = "none"
    }
    left.style.display = "";
  }

  let slideLeft = () => {
    slider.style.transform = `translateX(${value += counter}px)`;

    if (value === 0) {
      left.style.display = "none";
    }
    right.style.display = "";
  }

  right.addEventListener("click", slideRight);
  left.addEventListener("click", slideLeft);
}