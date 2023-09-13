import readlineSync from 'readline-sync';

const runGame = (getData, rule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  for (let i = 0; i < 3; i += 1) {
    const [expression, solution] = getData();
    console.log(`Question: ${expression}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer.toString() === solution.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${yourAnswer}" is wrong answer ;(. Correct answer was "${solution}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGame;
