
$(document).ready(function() {
    $("#geo-btn").click(geolocate);
});

function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        $("#result").text("Geolocation is not supported by this browser");
    }
}

function showPosition(position) {
    // write to the h4 with id="result"
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    $("#result").html(  "Latitude: " + latitude + "<br>" 
                    +   "Longitude: " + longitude);    
}

function showError(error) {

    switch(error.code) {    

		case error.PERMISSION_DENIED:
            $("#result").text("User denied the request for Geolocation.");
            break;
    				
        case error.POSITION_UNAVAILABLE:
            $("#result").text("Location information is unavailable.");
            break;

        case error.TIMEOUT:
            $("#result").text("The request to get user location timed out.");
            break;
                
        case error.UNKNOWN_ERROR:
            $("#result").text("An unknown error occurred.");
            break;

    }
        
}