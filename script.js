// Initialize the map and set its view to California Central Valley's coordinates
var map = L.map('map').setView([36.7783, -119.4179], 7); // Central Valley coordinates

// Add tile layer (map background)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Sample ET Data
var etData = {
    "coordinates": [36.7783, -119.4179],
    "et": 5.2,
    "forecastEt": 5.8
};

// Add a marker to the map and bind a popup to it
var point = L.marker([36.7783, -119.4179]).addTo(map)
    .bindPopup("ET: " + etData.et + " mm/day, Forecast ET: " + etData.forecastEt + " mm/day");

// Handle map clicks to show ET data (you can add more functionality later)
map.on('click', function(e) {
    var latlng = e.latlng;
    // For now, just display the ET data for the fixed point
    alert("Clicked at " + latlng + "\nET: " + etData.et + " mm/day, Forecast ET: " + etData.forecastEt + " mm/day");
});
