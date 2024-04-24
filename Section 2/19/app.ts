// const person: {
//     name: string;
//     age: number;
// } = {
 const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
 }= {
    name: 'Todd',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

// person.role.push('admin');
// person.role[1] = (10); // !!! ERROR !!!

// person.role = [0, 'admin', 'user']; // !!! ERROR !!!

let favoriteActivities: string[];

favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}