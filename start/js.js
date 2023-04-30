"use strict";
/*
ЗАДАЧА:
Создайте игру "Собери алфавит"

ПОДСКАЗКИ:

1-Не думайте о сокращении кода. Если будет очень много повторений однотипного кода - это нормально. Первая задача понимать логику языка, а только после оптимизировать его.
2-Помните про методы переноса элемента из одного места в другое(before, after и т.д.)
3-Помните про свойства, получения соседних элементов (previousElementSibling, previousElementSibling и т.д)

*/

const aAlfavit = document.querySelector(".box_a");
const bAlfavit = document.querySelector(".box_b");
const cAlfavit = document.querySelector(".box_c");
const dAlfavit = document.querySelector(".box_d");
const eAlfavit = document.querySelector(".box_e");
const fAlfavit = document.querySelector(".box_f");
const boxesElement = document.querySelector(".boxes");

const boxesBox = document.querySelectorAll(".boxes__box");
const audio = new Audio("./audio/Mountain Audio - Menu CLick.mp3");
const audioFinish = new Audio("./audio/huge win.wav");
let newLetters;

//укороченный вариант решения

function handleshort() {
  for (let letter = 0; letter < boxesBox.length; letter++) {
    boxesBox[letter].addEventListener("click", () => {
      if (boxesBox[letter].previousElementSibling != null) {
        boxesBox[letter].previousElementSibling.before(boxesBox[letter]);
      } else if (boxesBox[letter].nextElementSibling != null) {
        boxesBox[letter].nextElementSibling.after(boxesBox[letter]);
      }
      audio.play();
      newLetters = document.querySelectorAll(".boxes__box");
      console.log(newLetters);
      function handleOrder() {
        if (
          newLetters[0].classList.contains("box_a") &&
          newLetters[1].classList.contains("box_b") &&
          newLetters[2].classList.contains("box_c") &&
          newLetters[3].classList.contains("box_d") &&
          newLetters[4].classList.contains("box_e") &&
          newLetters[5].classList.contains("box_f")
        ) {
          audioFinish.play();
        }
      }
      handleOrder();
    });
  }
}

handleshort();

//длинный вариант решения
/*
function letters() {
  aAlfavit.addEventListener("click", () => {
    if (aAlfavit.previousElementSibling != null) {
      aAlfavit.previousElementSibling.before(aAlfavit);
    } else if (aAlfavit.nextElementSibling != null) {
      aAlfavit.nextElementSibling.after(aAlfavit);
    }
    audio.play();
  });
  bAlfavit.addEventListener("click", () => {
    if (bAlfavit.previousElementSibling != null) {
      bAlfavit.previousElementSibling.before(bAlfavit);
    } else if (bAlfavit.nextElementSibling != null)
      bAlfavit.nextElementSibling.after(bAlfavit);
    audio.play();
  });
  cAlfavit.addEventListener("click", () => {
    if (cAlfavit.previousElementSibling != null) {
      cAlfavit.previousElementSibling.before(cAlfavit);
    } else if (cAlfavit.nextElementSibling != null)
      cAlfavit.nextElementSibling.after(cAlfavit);
    audio.play();
  });
  dAlfavit.addEventListener("click", () => {
    if (dAlfavit.previousElementSibling != null) {
      dAlfavit.previousElementSibling.before(dAlfavit);
    } else if (dAlfavit.nextElementSibling != null)
      dAlfavit.nextElementSibling.after(dAlfavit);
    audio.play();
  });
  eAlfavit.addEventListener("click", () => {
    if (eAlfavit.previousElementSibling != null) {
      eAlfavit.previousElementSibling.before(eAlfavit);
    } else if (eAlfavit.nextElementSibling != null)
      eAlfavit.nextElementSibling.after(eAlfavit);
    audio.play();
  });
  fAlfavit.addEventListener("click", () => {
    if (fAlfavit.previousElementSibling != null) {
      fAlfavit.previousElementSibling.before(fAlfavit);
    } else if (fAlfavit.nextElementSibling != null)
      fAlfavit.nextElementSibling.after(fAlfavit);
    audio.play();
  });
}

letters();
*/
