// declare variables
let mapOptions = {'center': [33.8,-118.344],'zoom':8.5}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,message,rating){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <p>${message}</p> <b> Rating: ${rating}</b>`)
    createButtons(lat,lng,title)
    return message
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTA7moQmaZp6Iwxh5rKUmaD3cfq98sWI0SUtqDa-pawP1v4UwAEfYgG096QnNaRlVeRN7IoerErF58o/pub?output=csv"

function loadData(url){
    Papa.parse(dataUrl, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}
// we will put this comment to remember to call our function later!
loadData(dataUrl)

function processData(results){
    //console.log(results) //for debugging: this can help us see if the results are what we want
    results.data.forEach(data => {
        console.log(data) // for debugging: are we seeing each data correctly?
        // the console log can make sure we have the right field names selected!
        addMarker(data.lat,data.lng,data['What is the name of the café/boba shop?'],data['What is your favorite drink item on the menu?'],data['How would you rate this café/boba shop out of 5 stars?'])
    })
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); 
    newButton.id = "button"+title; 
    newButton.innerHTML = title; 
    newButton.setAttribute("lat",lat); 
    newButton.setAttribute("lng",lng); 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng], 14); 
    })
    const spaceForButtons = document.getElementById('placeForButtons')
    spaceForButtons.appendChild(newButton);
}


