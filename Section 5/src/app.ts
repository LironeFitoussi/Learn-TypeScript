interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

let user1: Person;
user1 = {
    name: 'Lirone',
    age: 30,
    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name);
    }
};

user1.greet('Hi there - I am');