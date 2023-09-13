import runGame from '../index.js';
import randomNumber from '../randomNumber.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => {
  if (n % 2 === 0) {
    return true;
  }
  return false;
};

const evenOrNot = () => {
  const rndNumb = randomNumber() * 2;
  if (isEven(rndNumb)) return [rndNumb, 'yes'];
  return [rndNumb, 'no'];
};
export default () => runGame(evenOrNot, rule);
