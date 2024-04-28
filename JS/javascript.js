var map = L.map('map').setView([51.38960321142604, 30.09883313148197], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 16,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([51.38960321142604, 30.09883313148197]).addTo(map);

marker.bindPopup("<b>Come find us!</b><br>If you dare.").openPopup();
