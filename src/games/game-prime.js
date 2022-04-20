import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let j = 2; j <= num / 2; j += 1) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
};

const gameData = () => {
  const randomNumber = getRandomNumber(0, 100);
  const question = String(randomNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gamePrime = () => gameEngine(gameRule, gameData);

export default gamePrime;
