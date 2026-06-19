const gpsBtn =
document.getElementById("gpsBtn");

gpsBtn.onclick = ()=>{

navigator.geolocation.getCurrentPosition(

(position)=>{

const lat =
position.coords.latitude;

const lng =
position.coords.longitude;

map.flyTo({

center:[lng,lat],

zoom:18,

pitch:75

});

document.getElementById("lat")
.textContent = lat;

document.getElementById("lng")
.textContent = lng;

}

);

};
