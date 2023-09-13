import readlineSync from 'readline-sync';

const brainGames = (game, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  let result = 0;
  while (result < 3) {
    const [expression, solution] = game();
    console.log(`Question: ${expression}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === solution.toString()) {
      console.log('Correct!');
      result += 1;
    } else {
      return console.log(`"${yourAnswer}" is wrong answer ;(. Correct answer was "${solution}".
Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default brainGames;
