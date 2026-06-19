const searchBox =
document.getElementById("searchBox");

searchBox.addEventListener("keypress",(e)=>{

if(e.key !== "Enter") return;

const query = searchBox.value;

fetch(
`https://nominatim.openstreetmap.org/search?format=json&q=${query}`
)

.then(res=>res.json())

.then(data=>{

if(!data.length) return;

const place = data[0];

map.flyTo({

center:[
parseFloat(place.lon),
parseFloat(place.lat)
],

zoom:17,

pitch:70,

bearing:-20

});

});

});
