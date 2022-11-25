const feedContainer = document.getElementById("feed-container");
console.log(feedContainer);

updateFeed();

// Setup a Sorting Function to handle the calls from SearchButton Queries
function displayTrips(e) {
    e.preventDefault();
    updateFeed(document.getElementById('fromField').value,
        document.getElementById('toField').value);
}

// Setup an eventlistener for the Search Button to Sort the Trips for a TO or FROM location.
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener('click', (e) => {
        displayTrips(e);
    }
);


function updateFeed(from = null, to = null) {
    feedContainer.innerHTML = '';

    // Important: Set to null if field is empty
    if (from == '') from = null;
    if (to == '') to = null;

    // Filter -> Sort the trips
    let tripsToShow = sortTrips(filterTrips(null, null, null, null, from, to), true, compareDateTime, compareStartingLocation);

    // Create cards for all filtered trips
    for (let i = 0; i < trips.length; i++) {
        let trip = tripsToShow[i];

        // Add top-level containers
        let data = createElement("div", "feed-data");
        data.id = "feed" + i;
        let extendedContainer = createElement("div", "feed-extended-data");

        // Add header items
        createElement("div", "feed-item-header", "Start Location:", data);
        createElement("div", "feed-header", trip.startLocation, data);

        createElement("div", "feed-item-header", "Destination:", data);
        createElement("div", "feed-header", trip.endLocation, data);

        createElement("div", "feed-item-header", "Date and Time:", data);
        createElement("div", "feed-header", trip.getDateString() + " " + trip.getTimeString(), data);

        createElement("div", "feed-item-header", "Price:", data);
        createElement("div", "feed-header", trip.price, data);

        // Add extended body elements
        createElement("div", "feed-extended-header", "Drive Name:", extendedContainer);
        createElement("div", "feed-extended-header-data", trip.driverName, extendedContainer);

        createElement("div", "feed-extended-header", "Available Seats:", extendedContainer);
        createElement("div", "feed-extended-header-data", trip.numberOfAvailableSeats, extendedContainer);

        createElement("div", "feed-extended-header", "Allergies:", extendedContainer);
        createElement("div", "feed-header", (trip.allergies !== "" ? trip.allergies : "No Allergies"), extendedContainer);

        createElement("div", "feed-extended-header", "Message:", extendedContainer);
        createElement("div", "feed-header", (trip.message !== "" ? trip.message : "No Message"), extendedContainer);

        // Add an expansion button
        let bookButton = createElement("button", "bookSeat", "Book Seat", extendedContainer);
        bookButton.addEventListener('click', (e) => { bookSeat(extendedContainer, bookButton, trip); });

        // Add an expansion button
        let expandButton = createElement("button", "listExpand", "+", data);
        expandButton.addEventListener('click', (e) => { toggleCardExpansion(extendedContainer, expandButton); });

        // expandButton.addEventListener("click", toggleCardExpansion(expandButton));

        //expandButton.onclick = "javascript: toggleCardExpansion(feed" + i + ")";
        // <a onclick="javascript: toggleCardExpansion(feed24)">click me</a>

        // Add the trip to the feed
        feedContainer.appendChild(data);
        feedContainer.appendChild(extendedContainer);
    }

}

// Support function for creating elements
function createElement(tag, className, text, parent) {
    let element = document.createElement(tag);
    element.className = className;
    if (text != null) element.innerText = text;
    if (parent != null) parent.appendChild(element);
    return element;
}
