const superheroes = require('superheroes');
const supervillains = require('supervillains');

const mySuperHero = superheroes.random();
const mySuperVillan = supervillains.random();

console.log("Superhero: " + mySuperHero);
console.log("Supervillain: " + mySuperVillan);