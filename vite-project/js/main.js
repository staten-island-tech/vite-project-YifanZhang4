import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { menu } from "./menu";
const DOMSelectors = {
  themeBtn: document.querySelector(".themebtn"),
};

DOMSelectors.themeBtn.addEventListener("click", function () {
  if(document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }

});
