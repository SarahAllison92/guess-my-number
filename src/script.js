"use strict";

const secretNumber = Math.round(Math.random() * 30);
let score = 20;
document.querySelector("#number").textContent = secretNumber;

function onClick() {
  const guess = Number(document.querySelector("#number-input").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector("#msg").textContent = "No number ...";
  } else if (guess === secretNumber) {
    document.querySelector("#msg").textContent = "Yey you guessed correct";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector("#msg").textContent = "Sorry, That's too high ...";
      score--;
      document.querySelector("#score-num").textContent = score;
    } else {
      document.querySelector("#msg").textContent = "You lose the game, Sorry";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector("#msg").textContent = "Sorry, That's too low ...";
      score--;
      document.querySelector("#score-num").textContent = score;
    } else {
      document.querySelector("#msg").textContent = "You lose the game, Sorry";
    }
  }
}

const clickBtn1 = document.querySelector("#check-btn");
clickBtn1.addEventListener("click", onClick);
