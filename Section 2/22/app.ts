// function combine(input1: number, input2: number) {
// function combine(input1: string, input2: string) {

function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result =  input1 + input2;
    } else {
        result =  input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Todd', 'Anna');
console.log(combinedNames);