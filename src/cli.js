import readlineSync from "readline-sync";

const greeting = () => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May i have your name? ");
  return console.log("Hello, " + userName + "!");
};

export { greeting };
