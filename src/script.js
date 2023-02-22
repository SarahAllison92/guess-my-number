"use strict";

let secretNumber = Math.round(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

let msg = document.querySelector("#msg");
let scoreNum = document.querySelector("#score-num");
let head = document.querySelector(".heading");
let check = document.querySelector("#check-btn");
let again = document.querySelector("#again-btn");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let number = document.querySelector("#number");
let input = document.querySelector("#number-input");

function onClick1() {
  const guess = Number(document.querySelector("#number-input").value);

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

    if (score > highscore) {
      highscore = score;
      document.querySelector("#high-score-num").textContent = highscore;
    }

    number.textContent = secretNumber;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      msg.textContent =
        guess < secretNumber
          ? "Sorry, That's too low ..."
          : "Sorry, That's too high ...";
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

function onClick2() {
  score = 20;
  secretNumber = Math.round(Math.random() * 20 + 1);

  msg.textContent = "Start Guessing....";
  scoreNum.textContent = "20";
  number.textContent = "?";
  input.value = "";

  head.style.backgroundColor = "#464B55";
  h1.style.color = "#fff";
  h2.style.color = "#fff";
  check.style.backgroundColor = "rgb(70, 75, 85, 0.5)";
  check.style.color = "#fff";
  again.style.backgroundColor = "rgb(70, 75, 85, 0.5)";
  again.style.color = "#fff";
}

const clickBtn1 = document.querySelector("#check-btn");
clickBtn1.addEventListener("click", onClick1);

const clickbtn2 = document.querySelector("#again-btn");
clickbtn2.addEventListener("click", onClick2);
