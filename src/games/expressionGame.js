import runGame from '../index.js';
import randomNumber from '../randomNumber.js';

const rule = 'What is the result of the expression?';

const calculate = () => {
  const operands = ['+', '-', '*'];
  const index = Math.floor(Math.random() * 3);
  const randomOperand = operands[index];
  const calculation = (n1, n2) => {
    switch (randomOperand) {
      case '+':
        return n1 + n2;
      case '-':
        return n1 - n2;
      case '*':
        return n1 * n2;
      default:
        return console.log(`Unknown operand: ${randomOperand}`);
    }
  };
  const randomNumber1 = randomNumber();
  const randomNumber2 = Math.round(randomNumber() / 2);
  const expression = `${randomNumber1} ${randomOperand} ${randomNumber2}`;
  const solution = calculation(randomNumber1, randomNumber2);
  return [expression, solution];
};
export default () => runGame(calculate, rule);
