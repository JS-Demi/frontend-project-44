import runGame from '../index.js';
import randomNumber from '../createRandomNumber.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const isEvenOrNot = () => {
  const maxNumber = 100;
  const number = randomNumber(maxNumber);
  return isEven(number) ? [number, 'yes'] : [number, 'no'];
};
export default () => runGame(isEvenOrNot, rule);
