'use strict';

let score = 20;
let highestScore = 0;

const scoreHtml = document.querySelector('.score');
const messageHtml = document.querySelector('.message');
const highScoreHtml = document.querySelector('.highscore');
const againButton = document.querySelector('.again');
const numberHtml = document.querySelector('.number');

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 20 + 1);

  return randomNumber;
};

const respawn = function () {
  randomNumber = getRandomNumber();
  console.log(randomNumber);
  score = 20;
  scoreHtml.textContent = score;
  document.body.style.backgroundColor = '#1F1F1F';
  inputValue.value = '';
  numberHtml.textContent = '?';
  messageHtml.textContent = 'Start guessing...';
};

let randomNumber = getRandomNumber();
console.log(randomNumber);

const checkButton = document.querySelector('.check');

const inputValue = document.querySelector('input');

checkButton.addEventListener('click', e => {
  let value = inputValue.value;

  if (value > randomNumber && score > 1) {
    score -= 1;
    scoreHtml.textContent = score;
    messageHtml.textContent = 'Too high !';
  } else if (value < randomNumber && score > 1) {
    score -= 1;
    scoreHtml.textContent = score;
    messageHtml.textContent = 'Too low !';
  } else if (score <= 1) {
    score -= 1;
    messageHtml.textContent = 'You Lost! Click again button';
    againButton.addEventListener('click', respawn);
  } else {
    messageHtml.textContent = 'Correct Number!';
    againButton.addEventListener('click', respawn);
    if (score > highestScore) {
      highestScore = score;
      highScoreHtml.textContent = highestScore;
    }
    numberHtml.textContent = randomNumber;
    document.body.style.backgroundColor = 'rgb(85, 171, 62)';
  }
});
