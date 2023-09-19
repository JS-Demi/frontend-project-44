import runGame from '../index.js';
import randomNumber from '../createRandomNumber.js';

const rule = 'What is the result of the expression?';

const createRandomOperand = () => {
  const operands = ['+', '-', '*'];
  const index = randomNumber(operands.length);
  return operands[index];
};
const calculatеSolution = (n1, n2, operand) => {
  switch (operand) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    default:
      throw new Error(`Unknown operand: ${operand}`);
  }
};

const createExpression = () => {
  const maxNumber1 = 50;
  const maxNumber2 = 20;
  const number1 = randomNumber(maxNumber1);
  const number2 = randomNumber(maxNumber2);
  const operand = createRandomOperand();
  const expression = `${number1} ${operand} ${number2}`;
  const solution = calculatеSolution(number1, number2, operand);
  return [expression, solution];
};
export default () => runGame(createExpression, rule);
