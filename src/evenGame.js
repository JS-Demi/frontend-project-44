import readlineSync from 'readline-sync';

const evenGame = () => {
console.log('Welcome to the Brain Games!')
const userName = readlineSync.question('May i have your name? ');
console.log('Hello ' + userName + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let result = 0;
while (result < 3) {
const randomNumber = Math.round(Math.random() * 100);
console.log('Question: ' + randomNumber);
const yourAnswer = readlineSync.question('Your answer: ');
if (randomNumber % 2 === 0) {
    if (yourAnswer === 'yes') {
   console.log('Correct!')
   result++;
    } else {
        return console.log("'" + yourAnswer + "' " + "is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, " + userName);
    }
} else {
    if (yourAnswer === 'no') {
        console.log('Correct!');
        result++;
         } else {
             return console.log("'" + yourAnswer + "' " + "is wrong answer ;(. Correct answer was 'no'\nLet's try again, " + userName);
         }
}
}
return console.log('Congratulations, ' + userName + '!');
    
    };
    export { evenGame };