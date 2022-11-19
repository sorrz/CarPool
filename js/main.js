// Holds all of the registered trips
// Call addTrip(Trip) to add another Trip to this array
const trips = new Array();

class Trip {
    constructor(driverName, numberOfAvailableSeats, dateTime, startLocation, endLocation, message, allergies, price) {
        // Initialize a new Trip object with these settings
        this.driverName = driverName;
        this.numberOfAvailableSeats = numberOfAvailableSeats;
        this.dateTime = dateTime;
        this.startLocation = startLocation;
        this.endLocation = endLocation;
        this.message = message;
        this.allergies = allergies;
        this.price = price;
    }

    getLocalDate() {
        // Converts and returns the UTC dateTime property to a Date with local values
        return new Date(this.dateTime.getTime() + this.dateTime.getTimezoneOffset() * 60000);
    }

    #getDateTimeString() {
        // Returns a string that represents the date and time (local)
        // in the following format yyyy:mm:dd hh:mm:ss
        return `${this.getLocalDate().toLocaleDateString()} ${this.getLocalDate().toLocaleTimeString()}`;
    }

    #getAllergiesString() {
        // For internal use
        // Returns "none" or the allergies
        if (this.hasAllergies()) return this.allergies;
        return "none";
    }

    #getMessageString() {
        // For internal use
        // Returns "none" or the message
        if (this.message === "") return "none";
        if (this.message.length <= 8) return this.message;
        return `\n${this.message}`;
    }

    hasAllergies() {
        // Returns true if any allergies has been specified
        return this.allergies !== "";
    }

    toMessage() {
        // Creates a user readable message that can be used in an alert or other html element
        // The message includes all of the properties contained in this object
        let separator = "------------------------------";
        return `From: ${this.startLocation}\nTo: ${this.endLocation}\n${separator}\nWhen: ${this.#getDateTimeString()}\nNumber of open spots: ${this.numberOfAvailableSeats}\n${separator}\nAllergies: ${this.#getAllergiesString()}\n${separator}\nPrice: ${this.price}\n${separator}\nAdditional notes: ${this.#getMessageString()}`;
    }
};

function addTrip(trip){
    trips.push(trip);
}

function createRandomTrip() {
    let trip = new Trip();
    trip.driverName = getRandomName();
    trip.numberOfAvailableSeats = getRandomSeats();
    trip.dateTime = getRandomDate();
    trip.startLocation = getRandomStart();
    trip.endLocation = getRandomEnd(trip.startLocation);
    trip.allergies = getRandomAllergies();
    trip.message = "";
    trip.price = 49;
    return trip;
}

function addRandomTrips(numberOfTrips) {
    for (let i = 0; i < numberOfTrips; i++) {
        addTrip(createRandomTrip());  
    }
}

function getRandomInt(maxValue) {
    return Math.floor(Math.random() * maxValue);
}

function getRandomName() {
    return getRandomFirstName() + " " + getRandomLastName();
}

function getRandomFirstName() {
    switch (getRandomInt(51)){
        case 0:
            return "Adam";
        case 1:
            return "Amanda";
        case 2:
            return "Benny";
        case 3:
            return "Bianca";
        case 4:
            return "Carl";
        case 5:
            return "Cecilia";
        case 6:
            return "David";
        case 7:
            return "Denise";
        case 8:
            return "Emil";
        case 9:
            return "Emma";
        case 10:
            return "Fredrik";
        case 11:
            return "Felicia";
        case 12:
            return "Gustav";
        case 13:
            return "Gabriella";
        case 14:
            return "Håkan";
        case 15:
            return "Hanna";
        case 16:
            return "Ivar";
        case 17:
            return "Ingela";
        case 18:
            return "Jonas";
        case 19:
            return "Johanna";
        case 20:
            return "Kevin";
        case 21:
            return "Kristin";
        case 22:
            return "Lennart";
        case 23:
            return "Lena";
        case 24:
            return "Måns";
        case 25:
            return "Miriam";
        case 26:
            return "Nicklas";
        case 27:
            return "Nathalie";
        case 28:
            return "Olle";
        case 29:
            return "Olivia";
        case 30:
            return "Petter";
        case 31:
            return "Petra";
        case 32:
            return "Rolf";
        case 33:
            return "Rebecka";
        case 34:
            return "Stefan";
        case 35:
            return "Stephanie";
        case 36:
            return "Tord";
        case 37:
            return "Tove";
        case 38:
            return "Urban";
        case 39:
            return "Ulrica";
        case 40:
            return "Viktor";
        case 41:
            return "Victoria";
        case 42:
            return "Walter";
        case 43:
            return "Wilma";
        case 44:
            return "Yosef";
        case 45:
            return "Yasmine";
        case 46:
            return "Zoran";
        case 47:
            return "Zara";
        case 48:
            return "Åke";
        case 49:
            return "Åsa";
        default:
            return "Ärling";
    }
}

function getRandomLastName() {
    switch (getRandomInt(51)){
        case 0:
            return "Adolfsson";
        case 1:
            return "Aspegren";
        case 2:
            return "Bergdahl";
        case 3:
            return "Blomqvist";
        case 4:
            return "Cederborg";
        case 5:
            return "Claesson";
        case 6:
            return "Dahl";
        case 7:
            return "Davidsson";
        case 8:
            return "Edholm";
        case 9:
            return "Engström";
        case 10:
            return "Feldt";
        case 11:
            return "Fjellman";
        case 12:
            return "Gidlund";
        case 13:
            return "Granath";
        case 14:
            return "Hallström";
        case 15:
            return "Hedborg";
        case 16:
            return "Isaksson";
        case 17:
            return "Isander";
        case 18:
            return "Jakobsson";
        case 19:
            return "Jungstedt";
        case 20:
            return "Karlsson";
        case 21:
            return "Kruse";
        case 22:
            return "Lagerlöf";
        case 23:
            return "Lantz";
        case 24:
            return "Malm";
        case 25:
            return "Mattsson";
        case 26:
            return "Nilsson";
        case 27:
            return "Nordin";
        case 28:
            return "Osborne";
        case 29:
            return "Ottosson";
        case 30:
            return "Persson";
        case 31:
            return "Pontén";
        case 32:
            return "Rheborg";
        case 33:
            return "Rosell";
        case 34:
            return "Sjöblom";
        case 35:
            return "Stjärne";
        case 36:
            return "Tegnér";
        case 37:
            return "Thulin";
        case 38:
            return "Uggla";
        case 39:
            return "Ullsten";
        case 40:
            return "Viklund";
        case 41:
            return "Vennberg";
        case 42:
            return "Wester";
        case 43:
            return "Wallin";
        case 44:
            return "Ytterström";
        case 45:
            return "Zelmerlöw";
        case 46:
            return "Zetterberg";
        case 47:
            return "Åberg";
        case 48:
            return "Åkerlund";
        case 49:
            return "Ädel";
        default:
            return "Österman";
    }
}

function getRandomSeats() {
    let r = Math.random();

    if (r <= 0.5){
        // 50% chanse of 3 seats available
        return 3;
    }
    else if (r <= 0.8) {
        // 30% chanse of 2 seats available
        return 2;
    }
    else if (r <= 0.95){
        // 15% chanse of 1 seats available
        return 1;
    }
    else {
        // 5% chanse of 4-8 seats available
        return getRandomInt(5) + 4;
    }
}

function getRandomDate() {
    let date = new Date();

    // Set the date randomly from 1 to 8 days ahead
    date.setDate(date.getDate() + getRandomInt(8) + 1);

    // Set the hour randomly from 04 to 22
    date.setHours(getRandomInt(18) + 4);

    // Set the minute randomly to 00, 15, 30 or 45
    date.setMinutes(getRandomInt(4) * 15);

    // Set the seconds to 00
    date.setSeconds(0);

    return date;
}

function getRandomStart() {
    // Note! createTripForm.js and js/main.js must both be linked in the html for this to workc
    return validCities[getRandomInt(validCities.length)];
}

function getRandomEnd(start) {
    // Note! createTripForm.js and js/main.js must both be linked in the html for this to workc
    let result = getRandomStart();

    // Make sure that the end location cannot be the same as the start location
    while (result === start){
        result = getRandomStart();
    }

    return result;
}

function getRandomAllergies() {
    // Randomly set between 0 and 4 allergies
    let numberOfAllergies;
    let allergies = new Array();

    let factor = Math.random();
    if (factor <= 0.60){
        // 60% chanse of 0 allergies
        numberOfAllergies = 0;
    }
    else if (factor <= 0.75){
        // 15% chanse of 1 allergy
        numberOfAllergies = 1;
    }
    else if (factor <= 0.87){
        // 12% chanse of 2 allergies
        numberOfAllergies = 2;
    }
    else if (factor <= 0.95){
        // 8% chanse of 3 allergies
        numberOfAllergies = 3;
    }
    else{
        // 5% chanse of 4 allergies
        numberOfAllergies = 4;
    }

    // Create random allergies
    for (let i = 0; i < numberOfAllergies; i++) {
        let allergy = getRandomAllergy();

        // Make sure that the allergy is not already specified
        while (allergies.includes(allergy)){
            allergy = getRandomAllergy();
        }

        allergies.push(allergy);
    }

    // Append all of the allergies into a string
    let result = "";

    for (let i = 0; i < allergies.length; i++) {
        result += allergies[i];
        if (i != allergies.length - 1) result += ", ";
    }

    return result;
}

function getRandomAllergy(){
    switch (getRandomInt(7)) {
        case 1:
            return "Cats";
        case 2:
            return "Dogs";
        case 3:
            return "Animal fur";
        case 4:
            return "Peanuts";
        case 5:
            return "Nuts";
        default:
            return "Perfume";
    }
}

// Use this way:
// A) let trip = new Trip("dennis", 3, "Norrköping", "Linköping", "allmän info", false, 200);
// A) let driver = trip.driverName;

// B) console.log(createRandomTrip());

// C) addRandomTrips(5);
// C) console.log(trips);