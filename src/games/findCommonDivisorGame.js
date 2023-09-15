import runGame from '../index.js';
import randomNumber from '../createRandomNumber.js';

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
  const randomNumber1 = randomNumber(100);
  const randomNumber2 = randomNumber(50);
  const numbers = `${randomNumber1} ${randomNumber2}`;
  const solution = findGreatestDivisible(randomNumber1, randomNumber2);
  return [numbers, solution];
};
export default () => runGame(createExpression, rule);
