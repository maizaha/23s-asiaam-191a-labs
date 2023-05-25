// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

let boba = L.featureGroup();
let cafe = L.featureGroup();

let layers = {
    "Boba shop": boba,
    "Café": cafe
}

let circleOptions = {
    radius: 4,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTA7moQmaZp6Iwxh5rKUmaD3cfq98sWI0SUtqDa-pawP1v4UwAEfYgG096QnNaRlVeRN7IoerErF58o/pub?output=csv"

// define the leaflet map
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

// add layer control box
L.control.layers(null,layers).addTo(map)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function addMarker(data){
    if(data['Is this a boba shop or a café?'] == "Boba shop"){
        circleOptions.fillColor = "red"
        boba.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>${data['What is the name of the café/boba shop?']}</h2> <p>${data['What is your favorite drink item on the menu?']}</p> <b> Rating: ${data['How would you rate this café/boba shop out of 5 stars?']}</b>`))
        createButtons(data.lat,data.lng,data['What is the name of the café/boba shop?'])
        }
    else{
        circleOptions.fillColor = "blue"
        cafe.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>${data['What is the name of the café/boba shop?']}</h2> <p>${data['What is your favorite drink item on the menu?']}</p> <b> Rating: ${data['How would you rate this café/boba shop out of 5 stars?']}</b>`))
        createButtons(data.lat,data.lng,data['What is the name of the café/boba shop?'])
    }
    return data
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng], 14); //this is the flyTo from Leaflet
    })
    const spaceForButtons = document.getElementById('placeForButtons')
    spaceForButtons.appendChild(newButton);//this adds the button to our page.
}

function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data)
    })
    boba.addTo(map) // add our layers after markers have been made
    cafe.addTo(map) // add our layers after markers have been made  
    let allLayers = L.featureGroup([boba,cafe]);
    map.fitBounds(allLayers.getBounds());
}

loadData(dataUrl)
