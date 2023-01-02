'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let message = document.querySelector(".message");
let score = 20;
let scoreText = document.querySelector(".score");

function checkFunc() {
    const guessedNumber = Number(document.querySelector(".guess").value);

    if (!guessedNumber) {
        message.textContent = "⛔ Please Make a Guess";
    } else if (guessedNumber === secretNumber) {
        message.textContent = "🟢 You Win";
    } else if (guessedNumber > secretNumber) {
        if (score > 1) {
            message.textContent = "📈 It's High";
            score--
            scoreText.textContent = score;
        } else {
            message.textContent = "🔥 You Lose"
            score--;
            scoreText.textContent = score;
        }

    } else if (guessedNumber < secretNumber) {
        if (score > 1) {
            message.textContent = "📉 It's Low";
            score--
            scoreText.textContent = score;
        } else {
            message.textContent = "🔥 You Lose"
            score--;
            scoreText.textContent = score;
        }

    }
}

document.querySelector(".check").addEventListener("click", checkFunc);