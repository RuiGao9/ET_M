// Initialize the map and set its view to Merced, California's coordinates
var map = L.map('map').setView([37.3021, -120.4820], 8); // Merced coordinates

// Add tile layer (map background)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Load GeoJSON data for boundary layers
var geojsonLayer = new L.GeoJSON.AJAX("script/geojson/boundary.geojson", {
    style: function(feature) {
        return { color: "#ff7800", weight: 2 };
    }
}).addTo(map);

// You can load more layers if you have multiple boundaries
var geojsonLayer2 = new L.GeoJSON.AJAX("script/geojson/another-boundary.geojson", {
    style: function(feature) {
        return { color: "#0074D9", weight: 2 };
    }
}).addTo(map);

// You can bind popups to the layers to show information when clicked
geojsonLayer.on('click', function(e) {
    alert("You clicked on a boundary: " + e.latlng.toString());
});