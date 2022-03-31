import readlineSync from 'readline-sync';

const secondGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`'Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  const getRandomNumber = () => Math.floor(Math.random() * 100);

  for (let i = 1; i <= 3; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const sum = number1 + number2;
    const sub = number1 - number2;
    const mul = number1 * number2;
    const randomPercentage = Math.random();
    const getRandomOperator = () => {
      if (randomPercentage < 0.33) {
        return '+';
      } if (randomPercentage < 0.66) {
        return '-';
      }
      return '*';
    };
    const randomExpression = () => {
      if (randomPercentage < 0.33) {
        return sum;
      }
      if (randomPercentage < 0.66) {
        return sub;
      }
      return mul;
    };
    const expression = randomExpression();
    const randomOperator = getRandomOperator();
    console.log(`Question: ${number1} ${randomOperator} ${number2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === expression) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expression}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default secondGame;
