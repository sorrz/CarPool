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

    getDateTimeString() {
        // Returns a string that represents the date and time (local)
        // in the following format yyyy:mm:dd hh:mm:ss
        return `${this.getLocalDate().toLocaleDateString()} ${this.getLocalDate().toLocaleTimeString()}`;
    }

    getAllergiesString() {
        // For internal use
        // Returns "none" or the allergies
        if (this.hasAllergies()) return this.allergies;
        return "none";
    }

    getMessageString() {
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
        return `From: ${this.startLocation}\nTo: ${this.endLocation}\n${separator}\nWhen: ${this.getDateTimeString()}\nNumber of open spots: ${this.numberOfAvailableSeats}\n${separator}\nAllergies: ${this.getAllergiesString()}\n${separator}\nPrice: ${this.price}\n${separator}\nAdditional notes: ${this.getMessageString()}`;
    }
};

function addTrip(trip){
    trips.push(trip);
}

// Use this way:
// let trip = new Trip("dennis", 3, "Norrköping", "Linköping", "allmän info", false, 200);
// let driver = trip.driverName;