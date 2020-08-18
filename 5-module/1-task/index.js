function hideSelf() {
  let targetElement = document.querySelector(".hide-self-button");
  let visibility = () => targetElement.hidden = true;
  targetElement.addEventListener("click", visibility);
}
