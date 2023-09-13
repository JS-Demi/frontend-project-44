import brainGames from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const calc = (n1, n2) => {
  let i = Math.min(n1, n2);
  while (i >= 1) {
    if (n1 % i === 0 && n2 % i === 0) return +i;
    i -= 1;
  }
  return 1;
};

const brainGcd = () => {
  const randomNumber1 = Math.ceil(Math.random() * 20);
  const randomNumber2 = Math.ceil(Math.random() * 20);
  const numbers = `${randomNumber1} ${randomNumber2}`;
  const solution = calc(randomNumber1, randomNumber2);
  return [numbers, solution];
};
export default () => brainGames(brainGcd, rules);
