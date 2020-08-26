import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {

  get elem() {
    return this._elem;
  }

  constructor(product) {
    this._elem = this.render(product);
    this._elem.addEventListener("click", (event) => this.onClick(event));
    this._id = product.id;

  }

  onClick(event) {
    if (event.target.closest(".card__button")) {
      let event = new CustomEvent("product-add", { bubbles: true, detail: this._id });
      this._elem.dispatchEvent(event);
      console.log(event.detail);
    }
  }

  render(product) {
    let divElementContainer = document.createElement("div");
    divElementContainer.classList.add("card");

    let divElementTop = document.createElement("div");
    divElementTop.classList.add("card__top");

    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", `/assets/images/products/${product.image}`);
    imgElement.classList.add("card__image");
    imgElement.setAttribute("alt", "product");

    let spanElement = document.createElement("span");
    spanElement.classList.add("card__price");
    spanElement.innerHTML = `€${product.price.toFixed(2)}`

    let divElementBody = document.createElement("div");
    divElementBody.classList.add("card__body");

    let divElementTitle = document.createElement("div");
    divElementTitle.classList.add("card__title");
    divElementTitle.innerHTML = `${product.name}`;

    let buttonElement = document.createElement("button");
    buttonElement.classList.add("card__button");
    buttonElement.setAttribute("type", "button");

    let imgIcon = document.createElement("img");
    imgIcon.setAttribute("src", "/assets/images/icons/plus-icon.svg");
    imgIcon.setAttribute("alt", "icon");

    divElementContainer.append(divElementTop);
    divElementContainer.append(divElementBody);

    divElementTop.append(imgElement);
    divElementTop.append(spanElement);

    divElementBody.append(divElementTitle);
    divElementBody.append(buttonElement);

    buttonElement.append(imgIcon);

    return divElementContainer;
  }
}
