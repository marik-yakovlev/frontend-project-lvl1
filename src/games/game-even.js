import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameData = () => {
  const number = getRandomNumber(0, 100);
  const question = String(number);
  const answer = isEven(number);
  return [question, answer];
};

const gameEven = () => gameEngine(gameRule, gameData);

export default gameEven;
