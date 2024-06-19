const darkModeButton = document.querySelector('[data-js="dark-mode-button');
const body = document.body;

darkModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
