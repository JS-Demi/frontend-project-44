import readlineSync from 'readline-sync';

const greeting = () => {
const userName = readlineSync.question('May i have your name? ');
return console.log('Hi ' + userName + '!');
    };
    
    export { greeting };
