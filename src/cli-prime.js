import readlineSync from 'readline-sync';

const isPrimeNumber = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`'Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = () => {
      if (randomNumber < 2) {
        return 'no';
      }

      for (let j = 2; j <= randomNumber / 2; j += 1) {
        if (randomNumber % j === 0) {
          return 'no';
        }
      }
      return 'yes';
    };
    const correctAnswer = result(randomNumber);
    if ((correctAnswer === 'yes' && userAnswer === 'yes') || (correctAnswer === 'no' && userAnswer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default isPrimeNumber;
