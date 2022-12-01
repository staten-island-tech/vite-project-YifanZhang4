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
