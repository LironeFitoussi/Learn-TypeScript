function add(n1: number, n2:number){
    // return n1.toString() + n2.toString();
    return n1 + n2;
}

function printResult (num: number): void {
    console.log('Result: ' + num);
    // return;
}

printResult(add(5, 12));
// console.log(printResult(add(5, 12)));

let someValue: undefined;