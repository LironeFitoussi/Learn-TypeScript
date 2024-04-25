function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
        
    }
}

const person = new Person();
console.log(person);
