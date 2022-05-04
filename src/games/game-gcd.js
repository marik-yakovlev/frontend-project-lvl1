import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGCD(num2, num1 % num2);
};

const gameData = () => {
  const randomFirstNum = getRandomNumber(1, 100);
  const randomsSecondNum = getRandomNumber(1, 100);
  const question = `${randomFirstNum} ${randomsSecondNum}`;
  const correctAnswer = String(getGCD(randomFirstNum, randomsSecondNum));
  return [question, correctAnswer];
};

const gameGCD = () => gameEngine(gameRule, gameData);

export default gameGCD;
