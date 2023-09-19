import runGame from '../index.js';
import randomNumber from '../createRandomNumber.js';

const rule = 'What number is missing in the progression?';

const createProgression = (number1, number2, progressionSize) => {
  const progressionArray = [number1];
  let progression = number1;
  for (let i = 1; i < progressionSize; i += 1) {
    progression += number2;
    progressionArray.push(progression);
  }
  return progressionArray;
};

const findHideNumber = () => {
  const progressionSize = 10;
  const index = randomNumber(progressionSize);
  const maxNumber1 = 100;
  const maxNumber2 = 20;
  const number1 = randomNumber(maxNumber1);
  const number2 = randomNumber(maxNumber2);
  const progressionArr = createProgression(number1, number2, progressionSize);
  const hideNumber = progressionArr
    .join(' ')
    .replace(progressionArr[index], '..');
  return [hideNumber, progressionArr[index]];
};
export default () => runGame(findHideNumber, rule);
