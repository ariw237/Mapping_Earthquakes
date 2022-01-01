//Add console.log to check to see if our code is working.
console.log("working");

//Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
//mapid references our id tag in <div>
//The array in set view are geocoordinates
//The 14 is the zoom level
//L.map is the default object for mapbox (see documentation)
//Create start and end coordinates for our map line
let line = [[33.9416, -118.4085],
            [37.6213, -122.3790],
             [40.7899, -111.9791],
             [47.4502, -122.3088]];

//Different set of coordinates (alter the polyline argument below to lineNew)
let lineNew = [[37.6213, -122.3790],
            [30.1974757,-97.6685416],
             [43.6777215,-79.6270084],
             [40.6413153,-73.780327]];


//Create a polyline using the line coordinates and make the line red
L.polyline(lineNew, {color:"blue", weight:4, opacity:0.5, dashArray: '10, 10', dashOffset: '0'}).addTo(map);




//Add a tile layer that will be the map background
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
