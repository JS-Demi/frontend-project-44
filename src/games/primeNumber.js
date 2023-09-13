import brainGames from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const primeNumber = () => {
  const randomNumber = Math.ceil(Math.random() * 100);
  if (isPrime(randomNumber)) {
    return [randomNumber, 'yes'];
  }
  return [randomNumber, 'no'];
};
export default () => brainGames(primeNumber, rules);
