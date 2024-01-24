"use strict";
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const rollbtn = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
let currentScore = [0, 0];
let activePlayer = 0;
let finalScore = [0, 0];
let playing = true;
function switchPlayer() {
  document.querySelector(".dice").src = `imgs/dice-1.png`;
  currentScore[activePlayer] = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore[activePlayer];
  document.querySelector(`.player--0`).classList.toggle("player--active");
  document.querySelector(`.player--1`).classList.toggle("player--active");
  activePlayer = activePlayer == 0 ? 1 : 0;
}

rollbtn.addEventListener("click", function () {
  if (playing) {
    const dice = Math.floor(Math.random() * 6) + 1;
    if (dice != 1) {
      document.querySelector(".dice").src = `imgs/dice-${dice}.png`;
      currentScore[activePlayer] += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore[activePlayer];
    } else {
      switchPlayer();
    }
  }
});

hold.addEventListener("click", function () {
  if (playing) {
    finalScore[activePlayer] += currentScore[activePlayer];
    document.querySelector(`#score--${activePlayer}`).textContent =
      finalScore[activePlayer];
    if (finalScore[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

const newgame = document.querySelector(".btn--new");

newgame.addEventListener("click", function () {
  finalScore = [0, 0];
  currentScore = [0, 0];
  document.querySelector("#score--0").textContent = 0;
  document.querySelector("#score--1").textContent = 0;
  document.querySelector("#current--0").textContent = 0;
  document.querySelector("#current--1").textContent = 0;
  playing = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
});
