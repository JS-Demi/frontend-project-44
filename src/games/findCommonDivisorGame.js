import runGame from '../index.js';
import { ceilRandomNumber } from '../createRandomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGreatestDivisible = (n1, n2) => {
  let i = Math.min(n1, n2);
  while (i >= 1) {
    if (n1 % i === 0 && n2 % i === 0) return i;
    i -= 1;
  }
  return 1;
};

const createExpression = () => {
  const number1 = ceilRandomNumber(100);
  const number2 = ceilRandomNumber(50);
  const numbers = `${number1} ${number2}`;
  const solution = findGreatestDivisible(number1, number2);
  return [numbers, solution];
};
export default () => runGame(createExpression, rule);
