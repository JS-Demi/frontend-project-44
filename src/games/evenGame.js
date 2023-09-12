import readlineSync from 'readline-sync';
import brainGames from '../index.js';

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNumber = Math.round(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);
  const yourAnswer = readlineSync.question('Your answer: ');
  if (randomNumber % 2 === 0) {
    if (yourAnswer === 'yes') {
      console.log('Correct!');
      return 'Correct!';
    } return `"${yourAnswer}" is wrong answer ;(. Correct answer was "yes".\nLet's try again, `;
  }
  if (yourAnswer === 'no') {
    console.log('Correct!');
    return 'Correct!';
  }
  return `"${yourAnswer}" is wrong answer ;(. Correct answer was "no".\nLet's try again, `;
};
export default () => brainGames(evenGame);
