function add(n1, n2) {
    return n1 + n2;
}
function printResults(num) {
    console.log('Result: ' + num);
}
printResults(add(5, 1));
var combinedValues;
combinedValues = add;
// combinedValues = 5;
// combinedValues = printResults;
console.log(combinedValues(8, 8));
// console.log(printResults(add(5, 1)));
// let someValue = undefined;
