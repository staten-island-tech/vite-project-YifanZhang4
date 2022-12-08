import "../styles/style.css";
import { menu } from "./menu";
import { DOMSelectors } from "./dom";

DOMSelectors.theme.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

DOMSelectors.all.addEventListener("click", function () {
  MTeaStore.getAll();
});

DOMSelectors.stock.addEventListener("click", function () {
  MTeaStore.getInStock();
});

const MTeaStore = {
  getAll: function () {
    menu.forEach((tea) => this.createCard(tea.name));
  },
  getInStock: function () {
    menu
      .filter((tea) => tea.inStock === true)
      .forEach((InStock) => this.createCard());
  },
  createCard: function () {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
    <h2>${menu.name}</h2>`
    );
  },
};
