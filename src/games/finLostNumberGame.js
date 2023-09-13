import runGame from '../index.js';
import randomNumber from '../randomNumber.js';

const rule = 'What number is missing in the progression?';

const lostPart = (n1, n2) => {
  const arr = [n1];
  let progression = n1;
  for (let i = 1; i < 10; i += 1) {
    progression += n2;
    arr.push(progression);
  }
  return arr;
};

const findLostNumber = () => {
  const rndNumb = Math.floor(randomNumber() / 5);
  const rndNumb1 = randomNumber();
  const rndNumb2 = Math.ceil(randomNumber() / 5);
  const progressionArr = lostPart(rndNumb1, rndNumb2);
  const skippedNumberArr = progressionArr
    .join(' ')
    .replace(progressionArr[rndNumb], '..');
  return [skippedNumberArr, progressionArr[rndNumb]];
};
export default () => runGame(findLostNumber, rule);
