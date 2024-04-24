// const userName = 'Max';
// userName = 3; // Error: Type '3' is not assignable to type 'string'.
// console.log('Time to get started...');

const button = document.querySelector('button');
if (button) {
  button.addEventListener('click', () => {
    console.log('Clicked!');
  });
}