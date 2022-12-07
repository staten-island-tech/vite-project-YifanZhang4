import "../styles/style.css";
import { menu } from "./menu";
import { DOMSelectors } from "./dom";

DOMSelectors.themeBtn.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

DOMSelectors.stock.addEventListener("click", function () {
  getInStock();
});

function getInStock() {
  const InStock = menu
    .filter((tea) => tea.inStock === true)
    .forEach((InStock) => console.log(InStock.name));
}

function createCard(name, img, inStock) {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
  <h2>${name}</h2>
  <img src="${img}">
  <h3>In Stock: ${inStock}</h3>`
  );
}

getInStock();
