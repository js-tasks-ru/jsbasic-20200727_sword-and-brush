/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement("ul");

  for (let value of friends) {
    ul.insertAdjacentHTML("afterbegin", `<li>${value.firstName} ${value.lastName}</li>`);
  }
  return ul;
}
