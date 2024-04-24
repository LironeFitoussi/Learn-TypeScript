const userName = 'Max';
// userName = 'Manu';
let age = 30;

age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(add(2, 5));
// console.log(isOld);

const add = (a: number, b: number = 1) => a + b;

console.log(add(2, 5));

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', e => console.log(e));
}

printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

// activeHobbies.push(hobbies[0], hobbies[1);
activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  name: 'Max',
  age: 30
};

const copiedPerson = { ...person };