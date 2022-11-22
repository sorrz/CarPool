//Validation for createTripForm.html
const form = document.getElementById('form');
const startLocation = document.getElementById('startLocation');
const endLocation = document.getElementById('endLocation');
const dateTime = document.getElementById('dateTime');
const numberOfAvailableSeats = document.getElementById('numberOfAvailableSeats');
const isAllergic = document.getElementById('isAllergic');
const allergiesText = document.getElementById('allergiesText');
const noteToPassenger = document.getElementById('noteToPassenger');
const price = document.getElementById('price');

//Array with valid cities
const validCities = ["stockholm", "göteborg", "malmö", "uppsala", "västerås", "örebro", "linköping", "helsingborg", "jönköping", "norrköping", "lund", "umeå", "gävle",
    "borås", "södertälje", "eskilstuna", "halmstad", "växjö", "karlstad", "sundsvall", "östersund", "trollhättan", "luleå", "lidingö", "borlänge", "tumba", "kristianstad",
    "kalmar", "falun", "skövde", "karlskrona", "skellefteå", "uddevalla", "varberg", "åkersberga", "örnsköldsvik", "landskrona", "nyköping", "vallentuna", "motala",
    "trelleborg", "ängelholm", "karlskoga", "märsta", "lerum", "alingsås", "sandviken", "kungälv"];

// Set initial value (current date and time + one hour)
// and minumum date to the datetime control
var now = new Date();
now.setMinutes(now.getMinutes() + 60 - now.getTimezoneOffset());
// Cut of the seconds and the remaining part of the toISOString() value (i.e. :48.165Z)
dateTime.value = now.toISOString().slice(0, 16);

var min = new Date();
min.setMinutes(min.getMinutes() - min.getTimezoneOffset());
dateTime.min = min.toISOString().slice(0, 16);

//Displays the textbox below the allergic checkbox when checked.
function toggleAllergies() {
    const checkBox = isAllergic;

    if (checkBox.checked == true) {
        allergiesText.style.visibility = "visible";
    } else {
        allergiesText.style.visibility = "hidden";
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate the form
    if (validate()) {
        // Validation was successfull:

        // Create new Trip object and add it to our feed storage
        // which is the: "trips" array, located in "js/main.js"
        let trip = createTripObject();
        addTrip(trip);

        // Alert the user of the success
        alert(`Thanks! Your trip has been registered.\n\n${trip.toMessage()}`);
        console.log(trips);

        // Go to the feed page
        // window.open('newFeed.html')
        updateFeed();
    } else {
        // Alert the user that the validation failed
        alert("Incorrectly filled form. Please take a look at your input.");
    }
});

function createTripObject() {
    //TODO: [ ] The login form is not integrated, so we do not have the name of the drive:
    //          A dummy name is used in its place.
    //TODO: [X] Price field is not integrated, so we do not have a price:
    //          A dummy price is used in its place.

    let driverName = "<Robot>"; // !!! To be replaced with the name from the logged in user
    //let price = 49; //             !!! To be replaced with the price that the user has set. REPLACED BY OSCAR 21/11

    // Creates and returns a new Trip object that is populated with the values of the form
    return new Trip(driverName, numberOfAvailableSeats.value, new Date(dateTime.value), startLocation.value, endLocation.value, noteToPassenger.value, allergiesText.value, price.value);
}

function validate() {
    const startLocationValue = startLocation.value.toLowerCase().trim();
    const endLocationValue = endLocation.value.toLowerCase().trim();
    const numberOfAvailableSeatsValue = numberOfAvailableSeats.value;
    const allergiesTextValue = allergiesText.value;
    const priceValue = price.value;

    let error = false; // set this flag to true if any validation error occured

    //Check starting location
    if (startLocationValue == '' || !validCities.includes(startLocationValue)) {
        setToInvalid(startLocation, 'Not a valid city.');
        error = true;
    } else {
        setToValid(startLocation);
    }

    //Check end location
    if (endLocationValue == '' || !validCities.includes(endLocationValue)) {
        setToInvalid(endLocation, 'Not a valid city.');
        error = true;
    } else if (endLocationValue == startLocationValue) {
        setToInvalid(endLocation, 'End destination cannot be the same as the starting location.')
        error = true;
    } else {
        setToValid(endLocation);
    }

    //Check dateTime
    if (new Date(dateTime.value) <= new Date()) {
        setToInvalid(dateTime, 'That time already passed.');
    } else {
        setToValid(dateTime);
    }

    //Check seats
    if (numberOfAvailableSeatsValue < 1) {
        setToInvalid(numberOfAvailableSeats, 'You can not bring any passengers with that amount of seats.');
        error = true;
    } else {
        setToValid(numberOfAvailableSeats);
    }

    //Check price
    if (priceValue < 1 || priceValue == '') {
        setToInvalid(price, 'Enter a price');
        error = true;
    } else {
        setToValid(price);
    }

    //Check allergies
    if (isAllergic.checked) {
        if (allergiesTextValue == '') {
            setToInvalid(isAllergic, 'Enter your allergies.');
            error = true;
        } else {
            setToValid(allergiesText);
        }
    } else {
        setToValid(allergiesText);
    }

    //Check note to driver
    // Not implemented

    // Return the state of validation
    return !error;
}


function setToInvalid(input, errorMsg) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');

    small.innerText = errorMsg;
}

function setToValid(input) {
    const target = input.parentElement;
    target.className = 'form-control success';
};