import { wizards } from "../data/wizzards";
const harryPotter = wizards;

const wizzardUsers = harryPotter.reduce((newArr: string[], wizards) => {
  if (wizards.house == "Hufflepuff") {
    newArr.push(wizards.name);
  }
  return newArr;
}, []);

console.log(wizzardUsers);
