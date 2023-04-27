// declare the map
const map = L.map('the_map').setView([37.0709,-98.444], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

addMarker(38.580944754376056, -121.48618764395997,'California','Where I live and grew up!')
addMarker(43.81770028386597, -120.41995171242311,'Oregon','I saw a complete solar eclipse here and some beautiful waterfalls!')
addMarker(47.34262597832787, -120.0201977198978,'Washington','I used to visit Seattle a lot when I was young and had spectacular crumpets!')
addMarker(34.32524963770209, -111.67531166466819,'Arizona','I have family in Chandler, and I love getting brown sugar boba from Rapha Tea near their house. I also LOVE the Grand Canyon and Sedona!')
addMarker(39.4132665806084, -116.91683901983261,'Nevada','Las Vegas is overrated in my opinion...but I saw a cool lightning storm there.')
addMarker(39.16877845963235, -111.49791459844596,'Utah','Home to the coolest rocks!! Zion National Park and Bryce Canyon are amazing!')
addMarker(33.06999264976136, -96.55334809152853,'Texas','I once took a Greyhound Bus from California to Texas (long story), but they have surprisingly good gluten-free food there.')
addMarker(41.64248534799302, -72.77360078689031,'Connecticut','Used to visit close family friends here when I was young, though I remember next to nothing.')
addMarker(40.71385227277837, -74.00537983574125,'New York','My birth state! I hope to spend more time here in the future, but I visited the MET for a few hours and was amazed!')
addMarker(40.73503355005254, -74.1755038362922,'New Jersey','I stayed in Newark for one night, and that was more than enough (terrible weather and very large bugs).')
addMarker(42.31144700908029, -71.15751774886213,'Massachusetts','Spent a couple days in Boston last summer and it had gr8 vibes!! I really enjoyed the architecture!')


// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <p>${message}</p>`)
    createButtons(lat,lng,title)
    return message
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); 
    newButton.id = "button"+title; 
    newButton.innerHTML = title; 
    newButton.setAttribute("lat",lat); 
    newButton.setAttribute("lng",lng); 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); 
    })
    document.getElementById("contents").appendChild(newButton); 
}

