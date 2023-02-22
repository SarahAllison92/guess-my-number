"use strict";

const secretNumber = Math.round(Math.random() * 20);
let score = 20;

function onClick1() {
  const guess = Number(document.querySelector("#number-input").value);
  console.log(guess, typeof guess);

  let msg = document.querySelector("#msg");
  let scoreNum = document.querySelector("#score-num");
  let head = document.querySelector(".heading");
  let check = document.querySelector("#check-btn");
  let again = document.querySelector("#again-btn");
  let h1 = document.querySelector("h1");
  let h2 = document.querySelector("h2");

  if (!guess) {
    msg.textContent = "No number ...";
  } else if (guess === secretNumber) {
    msg.textContent = "Yey you guessed correct";
    head.style.backgroundColor = "#6EFDA5";
    h1.style.color = "#000";
    h2.style.color = "#000";
    head.style.color = "#000";
    check.style.backgroundColor = "#6EFDA5";
    check.style.color = "#000";
    again.style.backgroundColor = "#6EFDA5";
    again.style.color = "#000";

    document.querySelector("#number").textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      msg.textContent = "Sorry, That's too high ...";
      score--;
      scoreNum.textContent = score;
    } else {
      msg.textContent = "You lose the game, Sorry";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      msg.textContent = "Sorry, That's too low ...";
      score--;
      scoreNum.textContent = score;
    } else {
      msg.textContent = "You lose the game, Sorry";
      head.style.backgroundColor = "#BE3825";
      h1.style.color = "#000";
      h2.style.color = "#000";
      head.style.color = "#000";
      check.style.backgroundColor = "#BE3825";
      check.style.color = "#000";
      again.style.backgroundColor = "#BE3825";
      again.style.color = "#000";
    }
  }
}

const clickBtn1 = document.querySelector("#check-btn");
clickBtn1.addEventListener("click", onClick1);
