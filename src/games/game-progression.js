import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRule = 'What number is missing in the progression?';

const getProgressionList = (start, length, step) => {
  const list = [];
  for (let i = 0; list.length < length; i += 1) {
    const val = start + step * i;
    list.push(val);
  }
  return list;
};

const gameData = () => {
  const randomNumber = getRandomNumber(1, 100);
  const randomStep = getRandomNumber(1, 10);
  const randomLength = getRandomNumber(5, 10);
  const progression = getProgressionList(randomNumber, randomLength, randomStep);
  const randomPosition = getRandomNumber(0, progression.length - 1);
  const correctAnswer = String(progression[randomPosition]);
  progression[randomPosition] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const gameProgression = () => gameEngine(gameRule, gameData);

export default gameProgression;
