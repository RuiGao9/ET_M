// Initialize the map and set its view to Merced, California's coordinates
var map = L.map('map').setView([37.3021, -120.4820], 8); // Merced coordinates

// Add tile layer (map background)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Load Madera county GeoJSON layer with specific style
var maderaLayer = new L.GeoJSON.AJAX("script/geojson/Madera.json", {
    style: function(feature) {
        return { color: "#FF5733", weight: 2 }; // Style for Madera (orange color)
    }
}).addTo(map);

// Load Merced county GeoJSON layer with a different style
var mercedLayer = new L.GeoJSON.AJAX("script/geojson/Merced.json", {
    style: function(feature) {
        return { color: "#3388FF", weight: 2 }; // Style for Merced (blue color)
    }
}).addTo(map);

// You can bind popups to the layers to show information when clicked
geojsonLayer.on('click', function(e) {
    alert("You clicked on a boundary: " + e.latlng.toString());
});