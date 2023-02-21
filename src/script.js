"use strict";

console.log(document.querySelector(".score"));
function onClick() {
  const guess = Number(document.querySelector("#number-input").value);
  console.log(guess, typeof guess);
}
const clickBtn1 = document.querySelector("#check-btn");
clickBtn1.addEventListener("click", onClick);
