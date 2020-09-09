export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.elem = this.render();
    this.curentStep;

    this.elem.addEventListener("click", (event) => this.valueRange(event));
    this.elem.addEventListener("click", (event) => this.switchEvent(event));
  }

  switchEvent(event) {
    this.elem.dispatchEvent(new CustomEvent("slider-change", { bubbles: true, detail: this.curentStep }));
  }

  valueRange(event) {
    let target = event.clientX - document.querySelector(".slider").getBoundingClientRect().left;
    let elementWidth = document.querySelector(".slider").getBoundingClientRect().width;

    let lineSegment = [];
    let stepValue = 0;
    let stepSize = elementWidth / (this.steps - 1);

    let persentLine = [];

    for (let i = 0; i < this.steps; i++) {
      lineSegment.push(stepValue);
      stepValue += stepSize;

      persentLine.push(Math.round(i * (100 / (this.steps - 1))));
    }

    let closestPoint = lineSegment.map((item) => Math.abs(target - item));

    let closestPointClick = Math.min(...closestPoint);
    let sectionNumber;
    for (let i = 0; i < closestPoint.length; i++) {
      if (closestPoint[i] === closestPointClick) {
        sectionNumber = i;
      }
    }

    this.curentStep = sectionNumber;

    if (document.querySelector(".slider__step-active")) {
      document.querySelector(".slider__step-active").classList.remove("slider__step-active");
    }

    document.querySelectorAll("span")[sectionNumber + 1].classList.add("slider__step-active");
    document.querySelector(".slider__value").innerHTML = `${sectionNumber}`;

    let leftPersentLine = persentLine[sectionNumber];

    document.querySelector(".slider__thumb").style.left = `${leftPersentLine}%`;
    document.querySelector(".slider__progress").style.width = `${leftPersentLine}%`;
  }

  render() {
    let divSlider = document.createElement("div");
    divSlider.classList.add("slider");
    divSlider.insertAdjacentHTML("afterbegin", `
      <div class="slider__thumb" style="left: 0%;">
          <span class="slider__value">0</span>
      </div>
      <div class="slider__progress" style="width: 0%;"></div>
      <div class="slider__steps"></div>`);

    for (let i = this.steps; i > 0; i--) {
      let spanElem = document.createElement("span");
      divSlider.querySelector(".slider__steps").append(spanElem);
    }

    let one = divSlider.querySelectorAll("div.slider__steps > span")[0];
    one.classList.add("slider__step-active");
    return divSlider;
  }
}