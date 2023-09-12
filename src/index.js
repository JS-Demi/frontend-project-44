import readlineSync from 'readline-sync';

const brainGames = (game) => {
console.log('Welcome to the Brain Games!')
const userName = readlineSync.question('May i have your name? ');
console.log('Hello ' + userName + '!');
let result = 0;
    while (result < 3) {
    const winOrLose = game();
    if (winOrLose === 'Correct!') {
   result++;
    } else {
    return console.log(winOrLose + userName);
}
    }
    console.log('Congratulations, ' + userName + '!');
    
    };
    export default brainGames;