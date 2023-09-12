import readlineSync from "readline-sync";
import brainGames from "../index.js";

const brainProgression = () => {
  console.log("What number is missing in the progression?");
  const newProgression = () => {
    const rndNumb = Math.round(Math.random() * 50);
    const rndNumb2 = Math.ceil(Math.random() * 10);
    const arr = [rndNumb];
    let progression = rndNumb;
    for (let i = 1; i < 10; i++) {
      progression += rndNumb2;
      arr.push(progression);
    }
    return arr;
  };
  const rndNumb3 = Math.round(Math.random() * 9);
  const progressionArr = newProgression();
  const skippedNumber = progressionArr
    .join(" ")
    .replace(progressionArr[rndNumb3], "..");
  console.log("Question: " + skippedNumber);
  const yourAnswer = readlineSync.question("Your answer: ");
  if (+yourAnswer === +progressionArr[rndNumb3]) {
    console.log("Correct!");
    return "Correct!";
  }
  const lose = `'${yourAnswer}' is wrong answer ;(. Correct answer was '${progressionArr[rndNumb3]}'.\nLet's try again, `;
  return lose;
};
export default () => brainGames(brainProgression);
