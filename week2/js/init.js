// JavaScript const variable declaration
const map = L.map('the_map').setView([34.0709, -118.444], 15); // (1)!

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // (2)!

//JavaScript let variable declaration to create a marker
let marker1 = L.marker([34.07566226369044, -118.44133725396742]).addTo(map) // (3)!
        .bindPopup('<h2>Charles E. Young Research Library</h2> <p> This library is where you are most likely to find me on campus (Cafe 451 coffee has me in a chokehold).</p> <img id ="yrl" src="yrl.jpg"/>')
        .openPopup();
let marker2 = L.marker([34.071835396571736, -118.44218733161529]).addTo(map) // (3)!
        .bindPopup('<h2>Powell Library</h2> <p>This library has stellar Andalusian-inspired architecture and is my workplace!</p> <img id ="powell" src="powelllibrary.jpeg"/>')
        .openPopup();
let marker3 = L.marker([34.0743418159981, -118.44353097310278]).addTo(map) // (3)!
        .bindPopup('<h2>Rosenfeld Library (Anderson)</h2> <p>This is a very bougie library, and I love the floor-to-ceiling windows on the bottom level.</p> <img id ="anderson" src="anderson.jpeg"/>')
        .openPopup();

//hover over markers to see pop-up instead of having to click
marker1.on('mouseover',function(ev) {
    marker1.openPopup();
});
marker2.on('mouseover',function(ev) {
    marker2.openPopup();
});
marker3.on('mouseover',function(ev) {
    marker3.openPopup();
});


