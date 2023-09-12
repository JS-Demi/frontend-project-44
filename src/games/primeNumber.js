import brainGames from '../index.js';
import readlineSync from 'readline-sync';

const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
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
  } else {
    if (yourAnswer === 'no') {
      console.log('Correct!');
      return 'Correct!';
    }  return `"${yourAnswer}" is wrong answer ;(. Correct answer was "no".\nLet's try again, `;
  }
};
export default () => brainGames(primeNumber);
