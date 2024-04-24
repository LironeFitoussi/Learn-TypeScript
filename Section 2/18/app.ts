// const person: {
//     name: string;
//     age: number;
// } = {
 const person = {
    name: 'Todd',
    age: 27,
    hobbies: ['Sports', 'Cooking']
};


let favoriteActivities: string[];
// let favoriteActivities: any[];
// favoriteActivities = 'Sports';
// favoriteActivities = ['Sports', 1];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}