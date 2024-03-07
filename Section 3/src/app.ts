// Code goes here!
// const userName = 'Lirone';
// userName =  "Lir";
// let age = 30;

// age = 29;

// function add(a: number, b: number) {
//     var result;
//     result = a + b;
//     return result;
// }

// if (age > 20) {
    // var isOld = true;
//     let isOld = true;

// }

// console.log(isOld);

// console.log(result);

const add = (a: number, b: number = 1) => a + b;
// console.log(add(2, 5));


const printOutput: (a: string | number) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}

printOutput(add(5));

