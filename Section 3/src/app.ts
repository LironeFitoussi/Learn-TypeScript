// const userName = 'Max';
// userName = 3; // Error: Type '3' is not assignable to type 'string'.
// console.log('Time to get started...');

const button = document.querySelector('button');

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  // !!!ERROR!!! Function doesn't return a value if no return statement is executed
  return; 
}

function clickHandler(message: string) {
  // let userName = 'Max'; // !!!ERROR!!! Unused variable
  console.log('Clicked! ' + message);
};

if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'You\'re welcome!'));
}