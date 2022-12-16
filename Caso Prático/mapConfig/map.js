$("#btnMap").click(function () {
    const outputText = $('#output');
    const visibilityOutPut = outputText.attr("data-visible");
    if (visibilityOutPut === "false") {
        outputText.addClass("output");
        outputText.attr("data-visible", "true");
        mapTextInfo.attr("data-visibility", "false");
        mapTextInfo.attr("aria-expanded", "false");
        btnMapInputActive.attr("aria-expanded", "false");
        mapTitle.attr("aria-expanded", "true");
        mapInputField.attr("aria-expanded", "false");
        btnMap.attr("aria-expanded", "false");
    } else if (visibilityOutPut === "true") {
        location.reload();
    }
});
const btnMapInputActive = $("#btn-Map-Toggle");
const mapTextInfo = $("#mapTextInfo");
const mapTitle = $("#mapDistanceTitle");
const mapInputField = $("#mapInputField");
const btnMap = $("#btnMap");
$("#btn-Map-Toggle").click(function () {
    const visibilityMapOptions = mapTextInfo.attr("data-visibility");
    if (visibilityMapOptions === "false") {
        mapTextInfo.attr("data-visibility", "true");
        mapTextInfo.attr("aria-expanded", "true");
        btnMapInputActive.attr("aria-expanded", "true");
        mapTitle.attr("aria-expanded", "false");
        mapInputField.attr("aria-expanded", "true");
        btnMap.attr("aria-expanded", "true");
    } else if (visibilityMapOptions === "true") {
        mapTextInfo.attr("data-visibility", "false");
        mapTextInfo.attr("aria-expanded", "false");
        btnMapInputActive.attr("aria-expanded", "false");
        mapTitle.attr("aria-expanded", "true");
        mapInputField.attr("aria-expanded", "false");
        btnMap.attr("aria-expanded", "false");
    }
});


const myLatLng = { lat: 41.406315, lng: -8.503225 };
var mapOptions = {
    center: myLatLng,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP

};
//create map
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

new google.maps.Marker({
    position: myLatLng,
    map,
    title: "GWD Office",
});



//create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();


//create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();
//bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);


//define calcRoute function
function calcRoute() {
    //create request
    var request = {
        origin: document.getElementById("from").value,
        destination: myLatLng,
        travelMode: google.maps.TravelMode.DRIVING, //WALKING, BICYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.METRIC
    }

    //pass the request to the route method
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

            //Get distance and time
            output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("from").value + ".<br />To: GWD Office" + ".<br /> Driving distance <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Duration <i class='fas fa-hourglass-start'></i> : " + result.routes[0].legs[0].duration.text + ".</div>";

            //display route
            directionsDisplay.setDirections(result);
        } else {
            //delete route from map
            directionsDisplay.setDirections({ routes: [] });
            //center map in London
            map.setCenter(myLatLng);

            //show error message
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
        }
    });

}

//create autocomplete objects for all inputs
var options = {
    types: ['(cities)']
}

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);;