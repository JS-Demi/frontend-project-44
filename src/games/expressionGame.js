import brainGames from '../index.js';

const rules = 'What is the result of the expression?';

const brainCalc = () => {
  const operands = ['+', '-', '*'];
  const index = Math.floor(Math.random() * 3);
  const randomOperand = operands[index];
  const calc = (n1, n2) => {
    if (randomOperand === '+') return n1 + n2;
    if (randomOperand === '-') return n1 - n2;
    return n1 * n2;
  };
  const randomNumber1 = Math.round(Math.random() * 20);
  const randomNumber2 = Math.round(Math.random() * 10);
  const expression = `${randomNumber1} ${randomOperand} ${randomNumber2}`;
  const solution = calc(randomNumber1, randomNumber2);
  return [expression, solution];
};
export default () => brainGames(brainCalc, rules);
