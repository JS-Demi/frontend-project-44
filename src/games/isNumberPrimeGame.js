import runGame from '../index.js';
import randomNumber from '../createRandomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const findDivisors = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const isNumberPrime = () => {
  const number = randomNumber(100);
  return findDivisors(number) ? [number, 'yes'] : [number, 'no'];
};
export default () => runGame(isNumberPrime, rule);
