async function weather(lat,lng){

const url =
`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`;

const data =
await fetch(url)
.then(r=>r.json());

document.getElementById(
"weatherValue"
).textContent =
data.current_weather.temperature + "°C";

}
