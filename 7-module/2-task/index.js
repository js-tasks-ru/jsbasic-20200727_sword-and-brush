import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {

    this.elem = this.render();
    this.elem.querySelector(".modal__close").addEventListener("click", this.buttonClose)
    document.addEventListener("keydown", (event) => this.keyHandler(event));
  }

  open() {
    document.body.classList.add("is-modal-open");
    document.body.append(this.elem)
  }

  setTitle(title) {
    this.elem.querySelector(".modal__title").textContent = title;
  }

  setBody(elem) {
    let targetElem = this.elem.querySelector(".modal__body");
    targetElem.innerHTML = "";
    targetElem.append(elem);
  }

  close() {
    document.body.classList.remove("is-modal-open");
    if (document.querySelector(".modal")) {
      document.querySelector(".modal").remove();
    }

  }

  buttonClose() {
    document.body.classList.remove("is-modal-open");
    if (document.querySelector(".modal")) {
      document.querySelector(".modal").remove();
    }
  }

  keyHandler(event) {
    if (event.code === "Escape") {
      document.body.classList.remove("is-modal-open");
      if (document.querySelector(".modal")) {
        document.querySelector(".modal").remove();
      }
    }
  }

  render() {

    let divModal = document.createElement("div");
    divModal.classList.add("modal");

    divModal.insertAdjacentHTML("afterbegin", `

    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
          Вот сюда нужно добавлять заголовок
        </h3>
      </div>

      <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
      </div>
    </div>
    `);

    return divModal;
  }
}
