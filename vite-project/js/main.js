import "../styles/style.css";

const DOMSelectors = {
  theme: document.getElementById("theme"),
};

DOMSelectors.theme.addEventListener("click", function () {
  theme.textContent = "Dark Theme";
  const addCSS = (css) =>
    (document.body.appendChild(document.createElement("style")).innerHTML =
      css);
  addCSS("body{ background-color: #3b3b3b;");
  addCSS("#header{ color: #dbdbdb;");
});
