
//Create the map object with a center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);
//mapid references our id tag in <div>
//The array in set view are geocoordinates
//The 14 is the zoom level
//L.map is the default object for mapbox (see documentation)



//Add a tile layer that will be the map background
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/navigation-preview-night-v2',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/ariw237/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    onEachFeature: function(feature, layer){
      layer.bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2><hr><h3> Airport name: " + feature.properties.name  + "</h3>")
    }
  }).addTo(map);

});


//Here is another way to render features and popups  (comment out the block of code above )
L.geoJSON(sanFranAirport, {
  //Here we use the onEachFeature method instead of pointToLayer
  onEachFeature: function(feature, layer){
    console.log(layer);
    layer.bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2><hr><h3> Airport name: " + feature.properties.name  + "</h3>");
  }
}).addTo(map);
