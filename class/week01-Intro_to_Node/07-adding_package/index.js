const _ = require("lodash");

const people = [
  { name: "John The Cena", age: 35 },
  { name: "The Rock", age: 35 },
];
console.log(people);

// sample command - get a random array element
const random_person = _.sample(people);
console.log(random_person);

// finding the index
person1_index = _.findIndex(people, random_person);
console.log(`The Index of the Random Person is ${person1_index}`);
