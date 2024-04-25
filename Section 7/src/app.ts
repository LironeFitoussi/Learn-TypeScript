//! Generics in TypeScript !//
// const names: Array<string> = ['Alice', 'Bob', 'Charlie']; // string[]
// names[0].split(' '); // ['A', 'l', 'i', 'c', 'e']

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });

// promise.then(data => {
//   data.split(' ');   
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Alice', hobbies: ['Sports']}, {age: 30});
console.log(mergedObj.hobbies);

// Generic constraints
interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

// keyof constraint 
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Alice'}, 'name');

// Generic classes
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1 if not found
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Alice');
textStorage.addItem('Bob');
textStorage.removeItem('Alice');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const aliceObj = {name: 'Alice'};
// objStorage.addItem(aliceObj);
// objStorage.addItem({name: 'Bob'});
// // ...
// objStorage.removeItem(aliceObj);
// console.log(objStorage.getItems());

// Generic utility types
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Alice', 'Bob'];
// names.push('Charlie'); //! Error!
// names.pop(); //! Error!