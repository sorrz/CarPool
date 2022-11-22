const feedContainer = document.getElementById("feed-container");
console.log(feedContainer);

updateFeed();

function updateFeed() {
    feedContainer.innerHTML = '';

    for (let i = 0; i < trips.length; i++) {
        let trip = trips[i];

        // Add top-level containers
        let data = createElement("div", "feed-data");
        let extendedContainer = createElement("div", "feed-extended-data");

        // Add header items
        createElement("div", "feed-item-header", "Start Location:", data);
        createElement("div", "feed-header", trip.startLocation, data);

        createElement("div", "feed-item-header", "Destination:", data);
        createElement("div", "feed-header", trip.endLocation, data);

        createElement("div", "feed-item-header", "Date and Time:", data);
        createElement("div", "feed-header", trip.getDateString() + " " + trip.getTimeString(), data);

        createElement("div", "feed-item-header", "Available Seats:", data);
        createElement("div", "feed-header", trip.numberOfAvailableSeats, data);

        createElement("div", "feed-item-header", "Price:", data);
        createElement("div", "feed-header", trip.price, data);

        // Add extended body elements
        createElement("div", "feed-extended-header", "Drive Name:", extendedContainer);
        createElement("div", "feed-header", trip.driverName, extendedContainer);

        createElement("div", "feed-extended-header", "Allergies:", extendedContainer);
        createElement("div", "feed-header", (trip.allergies !== "" ? trip.allergies : "No Allergies"), extendedContainer);

        createElement("div", "feed-extended-header", "Message:", extendedContainer);
        createElement("div", "feed-header", (trip.message !== "" ? trip.message : "No Message"), extendedContainer);

        // Add the trip to the feed
        feedContainer.appendChild(data);
        feedContainer.appendChild(extendedContainer);
    }

}

function createElement(tag, className, text, parent) {
    let element = document.createElement(tag);
    element.className = className;
    if (text != null) element.innerText = text;
    if (parent != null) parent.appendChild(element);
    return element;
}

// FUNCTIONS BELOW ARE DEPRECATED AND ARE NOT USED! PLEASE DO NOT TOUCH!



// function getArray () {
//     // (A) GET FROM SESSION
//     var first = localStorage.getItem("first"),
//         second = JSON.parse(localStorage.getItem("second"));
//O
// //     // (B) IT WORKS!
// //     // NOTE: LOCAL STORAGE IS PERSISTENT
// //     // WILL NOT BE DELETED UNLESS USER CLEARS BROWSER DATA OR MANUALLY CLEARED
// //     console.log(first);  // Foo Bar
// //     console.log(second); // ["Hello", "World"]
// //
// //     // (EXTRA) CLEAR LOCAL STORAGE
// //     // localStorage.removeItem("KEY");
// //     // localStorage.clear();
// // }
//
// // TODO! Fix the Storage to pass the Array between windows whitout reloading it with Random Trips.
//
// //
// // function storeArray () {
// //     // (A) VARIABLES TO PASS
// //     var first = "Foo Bar",
// //         second = ["Hello", "World"];
// //
// //     // (B) SAVE TO LOCAL STORAGE
// //     // (B1) FLAT STRING OR NUMBER
// //     // LOCALSTORAGE.SETITEM("KEY", "VALUE");
// //     localStorage.setItem("first", first);
// //
// //     // (B2) ARRAY OR OBJECT
// //     // LOCAL STORAGE CANNOT STORE ARRAY AND OBJECTS
// //     // JSON ENCODE BEFORE STORING, CONVERT T STRING
//     localStorage.setItem("second", JSON.stringify(second));
//
//     // (C) REDIRECT OR OPEN NEW WINDOW IF YOU WANT
//     location.href = "2b-local-storage.html";
//     // window.open("2b-local-storage.html");
// }