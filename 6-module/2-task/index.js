import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {

  constructor(product) {
    this.elem = this.render(product);
    this.elem.addEventListener("click", (event) => this.onClick(event));
    this.product = product.id;
  }

  onClick(event) {
    if (event.target.closest(".card__button")) {
      let customEvent = new CustomEvent("product-add", { bubbles: true, detail: this.product });
      this.elem.dispatchEvent(customEvent);
    }
  }

  render(product) {
    return createElement(`
  <div class="card" id ="${product.id}">
    <div class="card__top">
      <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
      <span class="card__price">€${product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
      <div class="card__title">${product.name}</div>
      <button type="button" class="card__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>
  </div>
`);
  }
}
