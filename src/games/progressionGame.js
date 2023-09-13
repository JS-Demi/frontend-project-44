import brainGames from '../index.js';

const rules = 'What number is missing in the progression?';

const newProgression = () => {
  const rndNumb1 = Math.round(Math.random() * 50);
  const rndNumb2 = Math.ceil(Math.random() * 10);
  const arr = [rndNumb1];
  let progression = rndNumb1;
  for (let i = 1; i < 10; i += 1) {
    progression += rndNumb2;
    arr.push(progression);
  }
  return arr;
};

const brainProgression = () => {
  const rndNumb = Math.round(Math.random() * 9);
  const progressionArr = newProgression();
  const skippedNumberArr = progressionArr
    .join(' ')
    .replace(progressionArr[rndNumb], '..');
  return [skippedNumberArr, progressionArr[rndNumb]];
};
export default () => brainGames(brainProgression, rules);
