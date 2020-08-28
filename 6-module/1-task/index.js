/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  get elem() {
    return this._elem;
  }

  constructor(rows) {

    this._elem = this.render(rows);
    this._elem.addEventListener("click", (event) => this.onClick(event));
  }

  onClick(event) {
    let target = event.target;
    if (target.dataset.name === "remove-button") {
      let deleteEl = target.closest(".thisEl");
      deleteEl.remove();
    }
  }

  render(rows) {

    let divElement = document.createElement("div");
    divElement.classList = "container";

    let tableElement = document.createElement("table");

    let tableHeader = `
          <thead><tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr></thead>
          `;

    let tableBody = "";

    for (const key of rows) {
      tableBody += `
      <tr class = "thisEl"><td>${key.name}</td>
      <td>${key.age}</td>
      <td>${key.salary}</td>
      <td>${key.city}</td>
      <td><button data-name = "remove-button">X</button></td></tr>`;
    }

    let tableInner = tableHeader + tableBody;
    tableElement.innerHTML = tableInner;

    divElement.append(tableElement);

    return divElement;
  }
}