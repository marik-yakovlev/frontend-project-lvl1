import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => !(number % 2);

const gameData = () => {
  const number = getRandomNumber(0, 100);
  const question = String(number);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const gameEven = () => gameEngine(gameRule, gameData);

export default gameEven;
