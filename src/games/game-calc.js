import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRule = 'What is the result of the expression?';

const getCalculator = (num1, operator, num2) => {
  let result = '';
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return null;
  }
  return result;
};

const gameData = () => {
  const randomNum1 = getRandomNumber(1, 10);
  const randomNum2 = getRandomNumber(1, 10);
  const listOfOperators = ['+', '-', '*'];
  const randomIntdex = getRandomNumber(1, listOfOperators.length - 1);
  const randomOperator = listOfOperators[randomIntdex];
  const correctAnswer = String(getCalculator(randomNum1, randomOperator, randomNum2));
  const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
  return [question, correctAnswer];
};

const gameCalc = () => gameEngine(gameRule, gameData);

export default gameCalc;
