import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const gameData = () => {
  const randomNumber = getRandomNumber(0, 100);
  const question = String(randomNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameEven = () => gameEngine(gameRule, gameData);

export default gameEven;
