import axios from 'axios';
const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyD_gPyTxCYlWehgKy6ZTRkEemH1iyFumVs'

// declare var google: any; //

type GoogleGeocodingResponse = {
    results: { geometry: { location: { lat: number, lng: number } } }[];
    status: 'OK' | 'ZERO_RESULTS';
}

function searchAddressHandler(e: Event) {
    e.preventDefault();
    const enteredAddress = addressInput.value;
    // console.log(enteredAddress);
    axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`)
        .then(response => {
            if (response.data.status !== 'OK') {
                throw new Error('Could not fetch location!');
            }
            
            const coordinates = response.data.results[0].geometry.location;
            console.log(coordinates);
            // const map = new google.maps.Map(document.getElementById('map')!, {
            //     center: coordinates,
            //     zoom: 16
            // });

            // new google.maps.Marker({ position: coordinates, map: map });

            let map: google.maps.Map;
            async function initMap(): Promise<void> {
                const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
                map = new Map(document.getElementById("map") as HTMLElement, {
                    center: coordinates,
                    zoom: 16,
                });
                new google.maps.Marker({position: coordinates, map});
            }

            initMap();
        })
        .catch(err => {
            console.log(err);
        });
    // send this to Google's API
}

form.addEventListener('submit', searchAddressHandler);