//Add console.log to check to see if our code is working.
console.log("working");

//Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);
//mapid references our id tag in <div>
//The array in set view are geocoordinates
//The 14 is the zoom level
//L.map is the default object for mapbox (see documentation)


// Get data from cities.js which contains an array containing each city's location, state, and population.
let cityData = cities;
//Loop thru the cities array to create a marker for each city
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {radius: city.population/200000, fillcolor:'#ff8000', color:'#ff8000', lineweight:4}).addTo(map)
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2><hr><h3>Population " + city.population.toLocaleString() + "</h3>").openPopup();
});

//Add a tile layer that will be the map background
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
