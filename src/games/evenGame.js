import brainGames from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const randomNumber = Math.round(Math.random() * 100);
  if (randomNumber % 2 === 0) {
    return [randomNumber, 'yes'];
  }
  return [randomNumber, 'no'];
};
export default () => brainGames(evenGame, rules);
