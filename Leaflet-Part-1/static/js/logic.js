// API endpoint
var queryURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson";

// GET request
d3.json(queryURL).then(function (data) {
    createFeatures(data.features);
  });

//// createFeatures ////
function createFeatures(earthquakeData) {

    // popup functionality
    function onEachFeature(feature, layer) {
        layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>${new Date(feature.properties.time)}</p>`);
    }
  
    // geoJSON
    var earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: onEachFeature
    });
  
    createMap(earthquakes);

}

//// createMap ////
function createMap(earthquakes) {

    // Tile layer
    var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // Map object
    L.map("map", {
    center: [0, 0],
    zoom: 2,
    layers: [street, earthquakes]
    });

}
