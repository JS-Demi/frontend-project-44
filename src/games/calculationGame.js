import runGame from '../index.js';
import randomNumber from '../randomNumber.js';

const rule = 'What is the result of the expression?';

const randomOperand = () => {
  const operands = ['+', '-', '*'];
  const index = Math.floor(Math.random() * 3);
  return operands[index];
};
const calculation = (n1, n2, operand) => {
  switch (operand) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    default:
      return console.log(`Unknown operand: ${operand}`);
  }
};

const calculate = () => {
  const randomNumber1 = randomNumber();
  const operand = randomOperand();
  const randomNumber2 = Math.round(randomNumber() / 2);
  const expression = `${randomNumber1} ${operand} ${randomNumber2}`;
  const solution = calculation(randomNumber1, randomNumber2, operand);
  return [expression, solution];
};
export default () => runGame(calculate, rule);
