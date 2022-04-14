import readlineSync from 'readline-sync';

const getProgression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`'Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const randomStep = Math.floor(Math.random() * 10);
    const randomPosition = Math.floor(Math.random() * 10);
    const list = [randomNumber];
    let sum = randomNumber;
    for (let j = 1; j < 10; j += 1) {
      sum += randomStep;
      list.push(sum);
    }
    const clone = list.slice(0);
    clone[randomPosition] = '..';
    const result = clone.join(', ');
    console.log(`Question: ${result}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = list[randomPosition];
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

export default getProgression;
