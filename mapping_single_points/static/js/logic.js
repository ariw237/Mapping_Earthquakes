//Add console.log to check to see if our code is working.
console.log("working");

//Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);
//mapid references our id tag in <div>
//The array in set view are geocoordinates
//The 14 is the zoom level
//L.map is the default object for mapbox (see documentation)
//Add a marker for Los Angeles CA
var marker = L.marker([34.0522, -118.2437]).addTo(map);
//Add circle marker of certain radius (in meters)
var circle = L.circle([34.0522, -118.2437], { radius:300, fillcolor:'#ffffa1', color:'black'}).addTo(map);
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
