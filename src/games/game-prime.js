import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameData = () => {
  const randomNumber = getRandomNumber(2, 100);
  const question = String(randomNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gamePrime = () => gameEngine(gameRule, gameData);

export default gamePrime;
