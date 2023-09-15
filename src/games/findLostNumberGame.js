import runGame from '../index.js';
import randomNumber from '../createRandomNumber.js';

const rule = 'What number is missing in the progression?';

const createProgression = (x, y) => {
  const arr = [x];
  let progression = x;
  const sizeProgression = 10;
  for (let i = 1; i < sizeProgression; i += 1) {
    progression += y;
    arr.push(progression);
  }
  return arr;
};

const findLostNumber = () => {
  const index = randomNumber(10);
  const number1 = randomNumber(100);
  const number2 = randomNumber(20);
  const progressionArr = createProgression(number1, number2);
  const hideNumber = progressionArr
    .join(' ')
    .replace(progressionArr[index], '..');
  return [hideNumber, progressionArr[index]];
};
export default () => runGame(findLostNumber, rule);
