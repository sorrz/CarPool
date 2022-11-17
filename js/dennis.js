class Trip {
    constructor(driverName, numberOfAvailableSeats, startLocation, endLocation, message, allergies, price) {
        this.driverName = driverName;
        this.numberOfAvailableSeats = numberOfAvailableSeats;
        this.startLocation = startLocation;
        this.endLocation = endLocation;
        this.message = message;
        this.allergies = allergies;
        this.price = price;
    }
};

// Use this way:
// let trip = new Trip("dennis", 3, "Norrköping", "Linköping", "allmän info", false, 200);
// let name = trip.name;