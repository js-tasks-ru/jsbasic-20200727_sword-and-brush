function toggleText() {
  let textVisibility = () => {
    let targetElement = document.querySelector("#text");
    targetElement.hidden = !targetElement.hidden;
  };

  document.querySelector(".toggle-text-button").addEventListener("click", textVisibility);
}
