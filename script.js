'use strict';
// //selecting elements
// const player0El = document.querySelector(`.player--0`);
// const player1El = document.querySelector(`.player--1`);
// const score0El = document.querySelector(`#score--0`);
// const score1El = document.getElementById(`score--1`);
// const diceEl = document.querySelector(`.dice`);
// const btnNew = document.querySelector(`.btn--new`);
// const btnRoll = document.querySelector(`.btn--roll`);
// const btnHold = document.querySelector(`.btn--hold`);
// const current0El = document.querySelector(`#current--0`);
// const current1El = document.querySelector(`#current--1`);
// let activePlayer;
// let scores;
// let currentScore;
// let playing;
// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle(`player--active`);
//   player1El.classList.toggle(`player--active`);
// };

// // score0El.textContent = 0;
// // score1El.textContent = 0;
// // diceEl.classList.add(`hidden`);
// const init = function () {
//   playing = true;
//   activePlayer = 0;
//   currentScore = 0;
//   scores = [0, 0];
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;
//   player0El.classList.remove(`player--winner`);
//   player1El.classList.remove(`player--winner`);
//   player0El.classList.add(`player--active`);
//   diceEl.classList.add(`hidden`);
//   player1El.classList.remove(`player--active`);
// };
// init();

// btnRoll.addEventListener(`click`, function () {
//   if (playing) {
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     console.log(dice);
//     diceEl.classList.remove(`hidden`);
//     diceEl.src = `dice-${dice}.png`;
//     if (dice !== 1) {
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       switchPlayer();
//     }
//   }
// });
// btnHold.addEventListener(`click`, function () {
//   if (playing) {
//     scores[activePlayer] += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];
//     if (scores[activePlayer] >= 100) {
//       playing = false;
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add(`player--winner`);
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove(`player--active`);
//     } else {
//       switchPlayer();
//     }
//   }
// });
// btnNew.addEventListener(
//   `click`,
//   init
//   // score0El.textContent = 0;
//   // score1El.textContent = 0;
//   // current0El.textContent = 0;
//   // current1El.textContent = 0;
//   // player0El.classList.remove(`player--winner`);
//   // player1El.classList.remove(`player--winner`);
//   // player0El.classList.add(`player--active`);
//   // diceEl.classList.add(`hidden`);
//   // player1El.classList.remove(`player--active`);
//   // playing = true;
//   // activePlayer = 0;
//   // currentScore = 0;
//   // scores = [0, 0];
//   //
//   // document.getElementById(`current--${activePlayer}`).textContent = 0;
//   // currentScore = 0;

//   // player0El.classList.add(`player--active`);
//   // player1El.classList.remove(`player--active`);
//   // diceEl.classList.add(`hidden`);
//   // document.querySelector(`.player--${activePlayer}`).classList.remove(`player--winner`);
// );
// let score0 = document.querySelector(`#score--0`);
// let score1 = document.querySelector(`#score--1`);
// let current0 = document.querySelector(`#current--0`);
// let current1 = document.querySelector(`#current--1`);
// let activePlayer;
// let playing;
// let diceImg = document.querySelector(`.dice`);
// let scr;
// let curScr;
// let scores;
// let randomNumber;
// const roollBtn = document.querySelector(`.btn--roll`);
// const newBtn = document.querySelector(`.btn--new`);
// const holdBtn = document.querySelector(`.btn--hold`);
// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = curScr;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   document.querySelector(`.player--0`).classList.toggle(`player--active`);
//   document.querySelector(`.player--1`).classList.toggle(`player--active`);
//   playing = true;
// };
// const startGame = function () {
//   score0.textContent = 0;
//   score1.textContent = 0;
//   scores = [0, 0];
//   current0 = 0;
//   current1 = 0;
//   activePlayer = true;
//   diceImg.classList.add(`hidden`);
//   scr = 0;
//   curScr = 0;
//   document.querySelector(`.player--0`).classList.add(`player--active`);
//   document.querySelector(`.player--1`).classList.remove(`player--active`);
// };
// startGame();
// const rolled = function () {
//   // randomNumber = Math.trunc(Math.random() * 6) + 1;
//   // console.log(randomNumber);
//   // diceImg.scr = `dice--${randomNumber}.png`;
//   // diceImg.classList.remove(`hidden`);
// };
// roollBtn.addEventListener(`click`, function () {
//   if (playing) {
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     console.log(dice);
//     randomNumber = Math.trunc(Math.random() * 6) + 1;
//     console.log(randomNumber);
//     diceImg.scr = `dice--${randomNumber}.png`;
//     diceImg.classList.remove(`hidden`);
//   }
// });

// roollBtn.addEventListener(`click`, function () {
//   randomNumber = Math.trunc(Math.random() * 6) + 1;
//   console.log(randomNumber);
//   diceImg.src = `dice-${randomNumber}.png`;
//   diceImg.classList.remove(`hidden`);
//   if (randomNumber !== 1) {
//     curScr += randomNumber;
//     console.log(curScr);
//     document.querySelector(`#current--0`).textContent = curScr;
//     if (curScr >= 100) {
//       playing = false;
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add(`player--winner`);
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove(`player--active`);
//     } else {
//       switchPlayer();
//     }
//   }
// });
const rollDice = document.querySelector(`.btn--roll`);
const holdBtn = document.querySelector(`.btn--hold`);
const newGame = document.querySelector(`.btn--new`);
const diceImg = document.querySelector(`.dice`);
const currentE0 = document.querySelector(`#current--0`);
const currentE1 = document.querySelector(`#current--1`);
const scoreE0 = document.querySelector(`#score--0`);
const scoreE1 = document.querySelector(`#score--1`);
// const playerE0 = document.querySelector(`.player--0`);
// const playerE1 = document.querySelector(`.player--1`);
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
let activePlayer;
let playing;
let scores;
let currentScore;
const start = function () {
  currentE0.textContent = 0;
  currentE1.textContent = 0;
  scoreE0.textContent = 0;
  scoreE1.textContent = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  document.querySelector(`.player--0`).classList.add(`player--active`);
  document.querySelector(`.player--1`).classList.remove(`player--active`);
  document.querySelector(`.player--0`).classList.remove(`player--winner`);
  document.querySelector(`.player--1`).classList.remove(`player--winner`);
  diceImg.classList.add(`hidden`);
};
start();
const swibe = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};
diceImg.classList.add(`hidden`);
rollDice.addEventListener(`click`, function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceImg.src = `dice-${dice}.png`;
    diceImg.classList.remove(`hidden`);
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      swibe();
    }
  }
});
holdBtn.addEventListener(`click`, function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] > 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      playing = false;
    }
  }
});
newGame.addEventListener(`click`, start);
