import createElement from '../../assets/lib/create-element.js';

export default class Carousel {

  get elem() {
    return this._elem;
  }

  constructor(slides) {


    this.slides = slides;
    this._elem = this.render(this.slides);
    this._elem.addEventListener("click", (event) => this.onClick(event));

    this._value = 0;
    this._curentSlide = 1;

    this._slideLenght = this._elem.querySelectorAll(".carousel__slide");
    console.log(this._slideLenght);
    console.log(this._slideLenght.length);

    this._left = this._elem.querySelector(".carousel__arrow_left");
    this._right = this._elem.querySelector(".carousel__arrow_right");

    this._elem.addEventListener("click", (event) => this.slider(event));
    this._elem.addEventListener("click", (event) => this.hidden(event));
  }


  slider(event) {
    let counter = this._elem.querySelector(".carousel__inner").offsetWidth;

    if (event.target.closest(".carousel__arrow_left")) {
      this._elem.querySelector(".carousel__inner").style.transform = `translateX(${this._value += counter}px)`;
      this._curentSlide -= 1;
      console.log(this._curentSlide);
    }

    if (event.target.closest(".carousel__arrow_right")) {
      this._elem.querySelector(".carousel__inner").style.transform = `translateX(${this._value -= counter}px)`;
      this._curentSlide += 1;
      console.log(this._curentSlide);
    }
  }


  hidden(event) {

    if (event.target.closest(".carousel__arrow_left")) {
      if (this._curentSlide === 1) {
        this._left.style.display = "none";
      }
      this._left.style.display = "";
    }


    if (event.target.closest(".carousel__arrow_right")) {

      if (this._curentSlide === this._slideLenght.length) {
        this._right.style.display = "none";
      }
      this._right.style.display = "";
    }
  }

  onClick(event) {
    if (event.target.closest(".carousel__button")) {
      let event = new CustomEvent("product-add", { bubbles: true, detail: this.slides.id });
      this._elem.dispatchEvent(event);
    }
  }


  render(slides) {

    let carousel = document.createElement("div");
    carousel.classList.add("carousel");
    carousel.insertAdjacentHTML("afterbegin", `
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    `);


    let divCarouselInner = document.createElement("div");
    divCarouselInner.classList.add("carousel__inner");


    for (const value of slides) {

      let divCarouselSlide = document.createElement("div");
      divCarouselSlide.classList.add("carousel__slide");
      divCarouselSlide.setAttribute("data-id", `${value.id}`);


      divCarouselSlide.insertAdjacentHTML("afterbegin", `
      <img src="/assets/images/carousel/${value.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
          <span class="carousel__price">€${value.price.toFixed(2)}</span>
          <div class="carousel__title">${value.name}</div>
          <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>
      `);

      divCarouselInner.append(divCarouselSlide);
    }

    carousel.append(divCarouselInner);
    return carousel;
  }
}