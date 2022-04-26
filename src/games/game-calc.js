import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';
import listOfOperators from '../operators.js';

const gameRule = 'What is the result of the expression?';

const getCalculator = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const gameData = () => {
  const randomNum1 = getRandomNumber(1, 10);
  const randomNum2 = getRandomNumber(1, 10);
  const randomIntdex = getRandomNumber(0, listOfOperators.length - 1);
  const randomOperator = listOfOperators[randomIntdex];
  const correctAnswer = String(getCalculator(randomNum1, randomOperator, randomNum2));
  const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
  return [question, correctAnswer];
};

const gameCalc = () => gameEngine(gameRule, gameData);

export default gameCalc;
