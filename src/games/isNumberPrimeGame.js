import runGame from '../index.js';
import randomNumber from '../createRandomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const findDivisors = (n) => {
  const minSuitableDivisor = 2;
  for (let i = minSuitableDivisor; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const isNumberPrime = () => {
  const maxNumber = 100;
  const number = randomNumber(maxNumber);
  return findDivisors(number) ? [number, 'yes'] : [number, 'no'];
};
export default () => runGame(isNumberPrime, rule);
