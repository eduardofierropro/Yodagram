"use strict";
const slider = document.querySelector(".stories__slider"),
  btns = Array.from(document.querySelectorAll(".stories__button"));
btns.forEach((t, s) => {
  t.addEventListener("click", () => {
    for (let t of btns) t.classList.add("activo");
    (slider.style.transform = t.classList.contains("stories__button--next") ? "translateX(-50%)" : "translateX(0%)"), btns[s].classList.remove("activo");
  });
});