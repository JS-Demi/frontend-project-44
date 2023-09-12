import readlineSync from 'readline-sync';
import brainGames from '../index.js';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const primeNumber = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  const randomNumber = Math.ceil(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);
  const yourAnswer = readlineSync.question('Your answer: ');
  if (isPrime(randomNumber)) {
    if (yourAnswer === 'yes') {
      console.log('Correct!');
      return 'Correct!';
    } return `"${yourAnswer}" is wrong answer ;(. Correct answer was "yes".\nLet's try again, `;
  }
  if (yourAnswer === 'no') {
    console.log('Correct!');
    return 'Correct!';
  } return `"${yourAnswer}" is wrong answer ;(. Correct answer was "no".\nLet's try again, `;
};
export default () => brainGames(primeNumber);
