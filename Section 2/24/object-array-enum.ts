// const person: {
//     name: string;
//     age: number;
// } = {
//  const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
//  } 

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ASMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR'};

const person = {
    name: 'Todd',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = (10); // !!! ERROR !!!

// person.role = [0, 'admin', 'user']; // !!! ERROR !!!

let favoriteActivities: any[];

favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}

// if (person.role === 'READ-ONLY-USER') {
//     console.log('is read only user');
// }

if (person.role === Role.AUTHOR) {
    console.log('is author');
}