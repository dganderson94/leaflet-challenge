// API endpoint
var queryURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

// GET request

//// createFeatures ////

//// createMap ////

// Tile layer
var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// baseMaps

// overlay

// Map object
var myMap = L.map("map", {
  center: [40, -100],
  zoom: 5,
  layers: [street]
});
