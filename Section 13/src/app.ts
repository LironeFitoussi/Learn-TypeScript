const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(e: Event) {
    e.preventDefault();
    const enteredAddress = addressInput.value;
    console.log(enteredAddress);

    // send this to Google's API
}

form.addEventListener('submit', searchAddressHandler);