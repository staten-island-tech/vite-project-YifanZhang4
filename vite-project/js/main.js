import "../styles/style.css";
import { DOMSelectors } from "./dom";
import { menu } from "./menu";

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
  MTeaStore.remove();
  MTeaStore.getAll();
});

DOMSelectors.stock.addEventListener("click", function () {
  MTeaStore.remove();
  MTeaStore.getInStock();
});

DOMSelectors.milkTea.addEventListener("click", function () {
  MTeaStore.remove();
  MTeaStore.getMilkTeas();
});

DOMSelectors.whalen.addEventListener("click", function () {
  MTeaStore.remove();
  MTeaStore.getWhalen();
});

DOMSelectors.reccomend.addEventListener("click", function () {
  MTeaStore.remove();
  MTeaStore.getReccomend();
});

const MTeaStore = {
  getAll: function () {
    menu.forEach((tea) => this.createCard(tea.name, tea.img, tea.inStock));
  },
  getInStock: function () {
    menu
      .filter((tea) => tea.inStock === "Yes")
      .forEach((stock) =>
        this.createCard(stock.name, stock.img, stock.inStock)
      );
  },
  getMilkTeas: function () {
    menu
      .filter((tea) => tea.MilkTea === true)
      .forEach((milkTea) =>
        this.createCard(milkTea.name, milkTea.img, milkTea.inStock)
      );
  },
  getWhalen: function () {
    menu
      .filter((tea) => tea.whalen === true)
      .forEach((whaleTea) =>
        this.createCard(whaleTea.name, whaleTea.img, whaleTea.inStock)
      );
  },
  getReccomend: function () {
    menu
      .filter((tea) => tea.reccomend === true)
      .forEach((reccomendation) =>
        this.createCard(
          reccomendation.name,
          reccomendation.img,
          reccomendation.inStock
        )
      );
  },
  createCard: function (name, img, inStock) {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
    <h2 class="head">${name}</h2>
    <img src="${img}" class="img">
    <h2>Is it in stock? ${inStock}.</h2>
    <h2>Price: $5.00</h2>`
    );
  },
  remove: function () {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.remove();
    });
  },
};

MTeaStore.getAll();
