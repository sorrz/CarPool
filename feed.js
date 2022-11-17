var Trip= [
    {
        rideId: "1",
        driverName: "F. Andersson",
        numberOfAvailableSeats: "4",
        startLocation: "Norrköping",
        endLocation: "Stockholm"
    },
    {
        rideId: "2",
        driverName: "R. Tompsson",
        numberOfAvailableSeats: "2",
        startLocation: "Linköping",
        endLocation: "Örebro"
    }
];


$.each(Trip,function(i,val){
    $.each(val,function(index,val){
        $(".data").append('<div class="'+index+'">'+val);
    });
    if((i) != Trip.length){
        $(".data").append('<a href="#">+</a>');
    };
});