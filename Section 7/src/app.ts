// const names: Array<string> = []; //string[]
// // names[0].split(' ');

// const promise: Promise<string> = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is Done');
//     }, 2000);
// });

// promise.then((data) => {
//     data.split(' ')
// });

function merge<T, U extends object>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
}

const mergedObj = merge({name: 'Lirone', hobbies: ['Sports']}, { age: 24 });
console.log(mergedObj); 