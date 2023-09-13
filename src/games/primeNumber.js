import runGame from '../index.js';
import randomNumber from '../randomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const isNumberPrime = () => {
  const randomNumber1 = randomNumber() * 2;
  return isPrime(randomNumber1) ? [randomNumber1, 'yes'] : [randomNumber1, 'no'];
};
export default () => runGame(isNumberPrime, rule);
