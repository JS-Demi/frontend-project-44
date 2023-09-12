import readlineSync from 'readline-sync';
import brainGames from '../index.js';

const brainCalc = () => {
  console.log('What is the result of the expression?');
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
  console.log(`Question: ${randomNumber1} ${randomOperand} ${randomNumber2}`);
  const expression = calc(randomNumber1, randomNumber2);
  const yourAnswer = readlineSync.question('Your answer: ');
  if (+yourAnswer === +expression) {
    console.log('Correct!');
    return 'Correct!';
  }
  return `"${yourAnswer}" is wrong answer ;(. Correct answer was "${expression}".\nLet's try again, `;
};
export default () => brainGames(brainCalc);
