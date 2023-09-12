import brainGames from '../index.js';
import readlineSync from 'readline-sync';

const brainGcd = () => {
console.log('Find the greatest common divisor of given numbers.');
    const calc = (n1, n2) => {
        if (n1 > n2) {
    for (let i = n2; i >= 1; i--) {
        if (n1 % i === 0 && n2 % i === 0) {
            return +i;
        } 
    }
    } else {
        for (let i = n1; i >= 1; i--) {
            if (n1 % i === 0 && n2 % i === 0) {
                return +i;
    }
    }
}
    }
    const randomNumber1 = Math.ceil(Math.random() * 20);
    const randomNumber2 = Math.ceil(Math.random() * 20);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const expression = calc(randomNumber1, randomNumber2);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (+yourAnswer === +expression) {
        console.log('Correct!');
        return 'Correct!';
    }
    const lose = `'${yourAnswer}' is wrong answer ;(. Correct answer was '${expression}'.\nLet's try again, `
    return lose;
};
export default () => brainGames(brainGcd);