//Validation for createTripForm.html
const form = document.getElementById('form');
const startLocation = document.getElementById('startLocation');
const endLocation = document.getElementById('endLocation');
const dateTime = new Date(document.getElementById('dateTime')).value;
const numberOfAvailableSeats = document.getElementById('numberOfAvailableSeats');
const isAllergic = document.getElementById('isAllergic');
const allergiesText = document.getElementById('allergiesText');
const noteToPassenger = document.getElementById('noteToPassenger');


//Displays the textbox below the allergic checkbox when checked.
function allergies() {   
    const checkBox = isAllergic;

    if (checkBox.checked == true){
      allergiesText.style.visibility = "visible";
    } else {
      allergiesText.style.visibility = "hidden";
    }

  }

form.addEventListener('submit', (e) =>{
        e.preventDefault();

    //alert('Trip registered');
    validate();
});

function validate(){
    const startLocationValue = startLocation.value.toLowerCase().trim();
    const endLocationValue = endLocation.value.toLowerCase().trim();
    const numberOfAvailableSeatsValue = numberOfAvailableSeats.value;
    // const isAllergicValue = isAllergic.value;
    const allergiesTextValue = allergiesText.value;

    //Check starting location
    if (startLocationValue == '' || !validCities.includes(startLocationValue)){

        setToInValid(startLocation, 'Not a valid city.');
    }
    else{

        setToValid(startLocation);
    }

    //Check end location
    if (endLocationValue == '' || !validCities.includes(endLocationValue)){

        setToInValid(endLocation,'Not a valid city.');
    }

    else if(endLocationValue == startLocationValue){
        setToInValid(endLocation, 'End destination cannot be the same as the starting location.')
    }
    else{

        setToValid(endLocation);
    }

    //Check dateTime
    // let timeNow = new Date.now();

    // if(timeNow() < dateTime()){
    //     setToInValid(dateTime, 'That time already passed');
    // }
    // else{
    //     setToValid(dateTime);
    // }
    
    //Check seats
    if (numberOfAvailableSeatsValue<1){
        setToInValid(numberOfAvailableSeats, 'You can not bring any passengers with that amount of seats.');
    }
    else {
        setToValid(numberOfAvailableSeats);
    }
    
    //Check allergies
    

    if(isAllergic.checked){
        
        if( allergiesTextValue == '' ){
        setToInValid(isAllergic, 'Enter your allergy(ies).');
        } 
        else {
            setToValid(allergiesText);
        }    
    }

    else {
        setToValid(allergiesText);
    }
    
    

    
    //Check note to driver
}


function setToInValid(input, errorMsg){
    const formControl =input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');

    small.innerText = errorMsg;
}

function setToValid(input){
    const target =input.parentElement;
    target.className = 'form-control success';
};









//Array with valid cities
const validCities =["stockholm","göteborg", "malmö", "uppsala", "västerås", "örebro", "linköping", "helsingborg", "jönköping", "norrköping", "lund", "umeå", "gävle",
"borås", "södertälje", "eskilstuna", "halmstad", "växjö", "karlstad", "sundsvall", "östersund", "trollhättan", "luleå", "lidingö", "borlänge", "tumba", "kristianstad",
"kalmar", "falun", "skövde", "karlskrona", "skellefteå", "uddevalla", "varberg", "åkersberga", "örnsköldsvik", "landskrona", "nyköping", "vallentuna", "motala",
"trelleborg", "ängelholm", "karlskoga", "märsta", "lerum", "alingsås", "sandviken", "kungälv"];

