//https://github.com/jamesqquick/javascript-array-functions-practice
import { characters } from "../fixtures/starwarsCharacters";
const starWars = characters;
// REDUCE - takes array of value and reduce it down to single value!

//EXERCISE

//1. Get the total mass of all characters

const totalMass = [...starWars].reduce((total, personMass) => {
  return total + personMass.mass;
}, 0);
console.log(totalMass);
