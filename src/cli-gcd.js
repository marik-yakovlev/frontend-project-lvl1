import readlineSync from 'readline-sync';

const getGreatestCommonDivisor = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`'Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= 3; i += 1) {
    const randomNum1 = Math.floor(Math.random() * 100);
    const randomNum2 = Math.floor(Math.random() * 100);
    const greatestCommonDivisor = (num1, num2) => {
      if (!num2) {
        return num1;
      }
      return greatestCommonDivisor(num2, num1 % num2);
    };
    console.log(`Question: ${randomNum1} ${randomNum2}`);
    const correctAnswer = greatestCommonDivisor(randomNum1, randomNum2);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default getGreatestCommonDivisor;
