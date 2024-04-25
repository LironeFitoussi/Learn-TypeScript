//! Generics in TypeScript !//
const names: Array<string> = ['Alice', 'Bob', 'Charlie']; // string[]
// names[0].split(' '); // ['A', 'l', 'i', 'c', 'e']

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});

promise.then(data => {
  data.split(' ');   
});

