import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { menu } from "./menu";
const DOMSelectors = {
  theme: document.getElementById("theme"),
};

DOMSelectors.theme.addEventListener("click", function () {
  theme.textContent = "Dark Theme";
  const addCSS = (css) =>
    (document.body.appendChild(document.createElement("style")).innerHTML =
      css);
  addCSS("body{ background-color: var(--primary);");
  addCSS("#header{ color: var(--secondary);");
});
