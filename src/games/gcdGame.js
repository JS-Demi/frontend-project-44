import runGame from '../index.js';
import randomNumber from '../randomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';

const isDivisible = (n1, n2) => {
  let i = Math.min(n1, n2);
  while (i >= 1) {
    if (n1 % i === 0 && n2 % i === 0) return +i;
    i -= 1;
  }
  return 1;
};

const findDivisor = () => {
  const randomNumber1 = randomNumber() * 2;
  const randomNumber2 = randomNumber();
  const numbers = `${randomNumber1} ${randomNumber2}`;
  const solution = isDivisible(randomNumber1, randomNumber2);
  return [numbers, solution];
};
export default () => runGame(findDivisor, rule);
