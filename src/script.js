"use strict";

console.log(document.querySelector(".score"));
const secretNumber = Math.round(Math.random() * 30);
let score = 20;
function onClick() {
  const guess = Number(document.querySelector("#number-input").value);
  console.log(guess, typeof guess);
}
const clickBtn1 = document.querySelector("#check-btn");
clickBtn1.addEventListener("click", onClick);
