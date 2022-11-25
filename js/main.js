// Holds all of the registered trips
// Call addTrip(Trip); to add another Trip to this array
// or   addRandomTrips(5000);
const trips = new Array();
// Set to true if you want to log debug-related things to the console
const debugMainJS = true;

// ################
// ## Trip Class ##
// ################

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

    bookSeat(passenger) {
        // Reservations for internal logic on a passenger list?

        if (this.numberOfAvailableSeats > 0) {
            this.numberOfAvailableSeats -= 1;
            return true;
        } else {
            return false;
        }
    }

    getAllergies() {
        // Separate all specified allergies into an array of allergies
        return allergies.split(", ");
    }

    getLocalDate() {
        // Converts and returns the UTC dateTime property to a Date with local values
        return new Date(this.dateTime.getTime() + this.dateTime.getTimezoneOffset() * 60000);
    }

    getDateString() {
        // Returns a string that represents the date (local)
        // in the following format yyyy:mm:dd
        return this.getLocalDate().toLocaleDateString();
    }

    getTimeString() {
        // Returns a string that represents time (local)
        // in the following format hh:mm
        return this.getLocalDate().toLocaleTimeString().slice(0, 5);
    }

    #getDateTimeString() {
        // Returns a string that represents the date and time (local)
        // in the following format yyyy:mm:dd hh:mm
        return `${this.getDateString()} ${this.getTimeString()}`;
    }

    #getAllergiesString() {
        // For internal use
        // Returns "none" or the allergies
        if (!this.hasAllergies()) return "none";
        else if (this.allergies.length < 16) return this.allergies;
        return `\n${this.allergies}`;
    }

    #getMessageString() {
        // For internal use
        // Returns "none" or the message
        if (this.message === "") return "none";
        if (this.message.length < 9) return this.message;
        return `\n${this.message}`;
    }

    hasAllergies() {
        // Returns true if any allergies has been specified
        return this.allergies !== "";
    }

    toMessage() {
        // Creates a user readable message that can be used in an alert or other html element
        // The message includes all of the properties contained in this object
        let separator = "---------------------------";
        return `From: ${this.startLocation}\nTo: ${this.endLocation}\n${separator}\nWhen: ${this.#getDateTimeString()}\nNumber of open spots: ${this.numberOfAvailableSeats}\n${separator}\nAllergies: ${this.#getAllergiesString()}\n${separator}\nPrice: ${this.price}\n${separator}\nAdditional notes: ${this.#getMessageString()}`;
    }
};

// ###############################
// ## Object creation functions ##
// ##################¤¤¤¤¤¤¤¤#####

function addTrip(trip) {
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
    trip.price = getRandomPrice(20);
    return trip;
}

function addRandomTrips(numberOfTrips) {
    for (let i = 0; i < numberOfTrips; i++) {
        addTrip(createRandomTrip());
    }
}

// ######################
// ## Random functions ##
// ######################

function getRandomInt(maxValue) {
    return Math.floor(Math.random() * maxValue);
}

function getRandomName() {
    return getRandomFirstName() + " " + getRandomLastName();
}

function getRandomFirstName() {
    switch (getRandomInt(51)) {
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
    // Could replace with an array
    switch (getRandomInt(51)) {
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

    if (r <= 0.5) {
        // 50% chance of 3 seats available
        return 3;
    } else if (r <= 0.8) {
        // 30% chance of 2 seats available
        return 2;
    } else if (r <= 0.95) {
        // 15% chance of 1 seats available
        return 1;
    } else {
        // 5% chance of 4-8 seats available
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
    while (result === start) {
        result = getRandomStart();
    }

    return result;
}

function getRandomAllergies() {
    // Randomly set between 0 and 4 allergies
    let numberOfAllergies;
    let allergies = new Array();

    let factor = Math.random();
    if (factor <= 0.60) {
        // 60% chanse of 0 allergies
        numberOfAllergies = 0;
    } else if (factor <= 0.75) {
        // 15% chanse of 1 allergy
        numberOfAllergies = 1;
    } else if (factor <= 0.87) {
        // 12% chanse of 2 allergies
        numberOfAllergies = 2;
    } else if (factor <= 0.95) {
        // 8% chanse of 3 allergies
        numberOfAllergies = 3;
    } else {
        // 5%  of 4 allergies
        numberOfAllergies = 4;
    }

    // Create random allergies
    for (let i = 0; i < numberOfAllergies; i++) {
        let allergy = getRandomAllergy();

        // Make sure that the allergy is not already specified
        while (allergies.includes(allergy)) {
            allergy = getRandomAllergy();
        }

        allergies.push(allergy);
    }

    // Append all the allergies into a string
    let result = "";

    for (let i = 0; i < allergies.length; i++) {
        result += allergies[i];
        if (i != allergies.length - 1) result += ", ";
    }

    return result;
}

function getRandomAllergy() {
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

function getRandomPrice(max = 10) {
    // Returns a random value from 0 to max * 10 in ten step increments (minus 1)
    // i.e. 0, 9, 19, 29, 39, 49 etc.
    return Math.max(Number.parseInt(Math.random() * 11) * max - 1, 0);
}

function createTime(hour, minute, fromDate = null) {
    // This function creates a new date object that is set to
    // today's date (or fromDate if specified), and the specified hour and minute
    // Usage: When comparing dates and not want the time to affect it

    let date = null;
    if (fromDate === null) {
        date = new Date();
    } else {
        date = new Date(fromDate);
    }

    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(0);
    date.setMilliseconds(0);

    return date;
}

// ##############¤¤#########
// ## Filtering functions ##
// ############¤¤###########

function filterTrips(dateFrom = null, dateTo = null, timeFrom = null, timeTo = null, from = null, to = null, allergies = null, price = null, excludeFullyBooked = true) {
    let result = new Array();

    // Go through each registered trip and perform a failing check
    trips.forEach(trip => {
        if (excludeFullyBooked && trip.numberOfAvailableSeats <= 0) return;
        if (dateFrom !== null) {
            // Exclude trips that is before this date
            let tripDate = createTime(0, 0, trip.dateTime.toLocaleDateString());
            let date = createTime(0, 0, dateFrom);

            // For debugging
            if (debugMainJS) {
                let string = tripDate.toLocaleString() + " < " + date.toLocaleString();
                if (tripDate < date) string += ": FAIL";
                console.log(string);
            }

            if (tripDate < date) return;
        }
        if (dateTo !== null) {
            // Exclude trips that is after this date
            let tripDate = createTime(0, 0, trip.dateTime.toLocaleDateString());
            let date = createTime(0, 0, dateTo);

            // For debugging
            if (debugMainJS) {
                let string = tripDate.toLocaleString() + " > " + date.toLocaleString();
                if (tripDate > date) string += ": FAIL";
                console.log(string);
            }

            if (tripDate > date) return;
        }
        if (timeFrom !== null) {
            // Exclude trips that starts before this time

            // For debugging
            if (debugMainJS) {
                let string = trip.dateTime.getHours() + " < " + timeFrom.getHours();
                if (trip.dateTime.getHours() < timeFrom.getHours()) string += ": FAIL";
                else if (trip.dateTime.getHours() === timeFrom.getHours()){
                    string = trip.dateTime.getHours() + " = " + timeFrom.getHours() + " | " + trip.dateTime.getMinutes() + " < " + timeFrom.getMinutes();
                    if (trip.dateTime.getMinutes() < timeFrom.getMinutes()) string += ": FAIL";
                }
                console.log(string);
            }

            if (trip.dateTime.getHours() < timeFrom.getHours()) return;
            else if (trip.dateTime.getHours() === timeFrom.getHours() && trip.dateTime.getMinutes() < timeFrom.getMinutes()) return;
        }
        if (timeTo !== null) {
            // Exclude trips that starts after this time

            // For debugging
            if (debugMainJS) {
                let string = trip.dateTime.getHours() + " > " + timeTo.getHours();
                if (trip.dateTime.getHours() > timeTo.getHours()) string += ": FAIL";
                else if (trip.dateTime.getHours() === timeTo.getHours()){
                    string = trip.dateTime.getHours() + " = " + timeTo.getHours() + " | " + trip.dateTime.getMinutes() + " > " + timeTo.getMinutes();
                    if (trip.dateTime.getMinutes() > timeTo.getMinutes()) string += ": FAIL";
                }
                console.log(string);
            }
            if (trip.dateTime.getHours() > timeTo.getHours()) return;
            else if (trip.dateTime.getHours() === timeTo.getHours() && trip.dateTime.getMinutes() > timeTo.getMinutes()) return;
        }
        // Exclude trips that do not start from the specified location
        if (from !== null && from.toLowerCase() !== trip.startLocation.toLowerCase()) return;
        // Exclude trips that do not end in the specified location
        if (to !== null && to.toLowerCase() !== trip.endLocation.toLowerCase()) return;
        // Exclude trips that costs more than the specified price
        if (price !== null && trip.price > price) return;
        if (allergies !== null) {
            // Exclude trips that has any of the specified allergies listed

            // Separate all specified allergies into an array of allergies
            let allergyArray = allergies.split(", ");

            // Loop through each of the allergies and see if they exist in the trip
            let fail = false;
            allergyArray.forEach(allergy => {
                // Check if the current allergy is included in the trip's listed allergies
                if (trip.allergies.toLowerCase().includes(allergy.toLowerCase())) {
                    fail = true;
                    return; // No need to check further allergies
                }
                ;
            });

            if (fail) return;
        }

        // If the execution reaches here, add the trip to the result
        result.push(trip);
    });

    return result;
}

// #########################
// ## Cleansing functions ##
// ######################¤¤#

function cleanseTrips(removeFullyBooked = false) {
    // This function scans all trips and removes the ones that are
    // out of date (passed)

    let now = new Date();
    for (let i = 0; i < trips.length; i++) {
        const trip = trips[i];
        if (trip.dateTime <= now || (removeFullyBooked && trip.numberOfAvailableSeats <= 0)) {
            if (debugMainJS) console.log(`Removing ${i}: ${trip.driverName} (${trip.getDateString()} ${trip.getTimeString()})`);
            trips.splice(i, 1);
        }
    }
}

// #######################
// ## Sorting functions ##
// #######################

function sortTrips(tripArray, ascending, fieldA, fieldB = null, fieldC = null, fieldD = null, fieldE = null, fieldF = null) {
    // Sort the passed in array of Trip objects in custom ordering
    // Specify as many sub-ordering methods as needed (up to 5).
    // example A: sortTrips(trips, true, comparePrice, compareStartingLocation)
    // example B: sortTrips(trips, false, compareDriverName)

    // Pass in any of the below compareXXX functions as parameter values of field A to F

    tripArray.sort((a, b) => {
        let compare;
        compare = fieldA(a, b, ascending);
        if (compare === 0 && fieldB !== null) compare = fieldB(a, b, ascending);
        if (compare === 0 && fieldC !== null) compare = fieldC(a, b, ascending);
        if (compare === 0 && fieldD !== null) compare = fieldD(a, b, ascending);
        if (compare === 0 && fieldE !== null) compare = fieldE(a, b, ascending);
        if (compare === 0 && fieldF !== null) compare = fieldF(a, b, ascending);
        return compare;
    });

    return tripArray;
}

function compareStartingLocation(a, b, ascending = true) {
    if (a.startLocation.toLowerCase() === b.startLocation.toLowerCase()) return 0;
    return a.startLocation.toLowerCase() < b.startLocation.toLowerCase() ? (ascending ? -1 : 1) : (ascending ? 1 : -1);
}

function compareDestination(a, b, ascending = true) {
    if (a.endLocation.toLowerCase() === b.endLocation.toLowerCase()) return 0;
    return a.endLocation.toLowerCase() < b.endLocation.toLowerCase() ? (ascending ? -1 : 1) : (ascending ? 1 : -1);
}

function compareDateTime(a, b, ascending = true) {
    if (a.dateTime === b.dateTime) return 0;
    return a.dateTime < b.dateTime ? (ascending ? -1 : 1) : (ascending ? 1 : -1);
}

function compareDriverName(a, b, ascending = true) {
    if (a.driverName === b.driverName) return 0;
    return a.driverName < b.driverName ? (ascending ? -1 : 1) : (ascending ? 1 : -1);
}

function comparePrice(a, b, ascending = true) {
    if (a.price === b.price) return 0;
    return a.price < b.price ? (ascending ? -1 : 1) : (ascending ? 1 : -1);
}

function compareAvailableSeats(a, b, ascending = true) {
    if (a.numberOfAvailableSeats === b.numberOfAvailableSeats) return 0;
    return a.numberOfAvailableSeats < b.numberOfAvailableSeats ? (ascending ? 1 : -1) : (ascending ? -1 : 1);
}

// ###############
// ## Main code ##
// ###############

// Debug
if (debugMainJS) {
    console.log(`Username; ${localStorage.getItem("Username")}`)
    console.log("Generating Trips:")
}

addRandomTrips(150);

// TESTCASES
// Use this way:
// A) let trip = new Trip("dennis", 3, "Norrköping", "Linköping", "allmän info", false, 200);
// A) let driver = trip.driverName;

// B) console.log(createRandomTrip());

// C) addRandomTrips(5);
// C) console.log(trips);

// D) console.log(filterTrips(null, null, null, null, null, null, "PerfUME, Cats", null));
// E) console.log(filterTrips(null, null, createTime(15, 15), createTime(20, 45), null, null, null, null));