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
  const randomNumber1 = randomNumber(50);
  const operand = createRandomOperand();
  const randomNumber2 = randomNumber(20);
  const expression = `${randomNumber1} ${operand} ${randomNumber2}`;
  const solution = calculatеSolution(randomNumber1, randomNumber2, operand);
  return [expression, solution];
};
export default () => runGame(createExpression, rule);
