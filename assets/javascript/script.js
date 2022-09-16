// Weather Api
const apiKey = "ff77349cf3ff082fc8d44b4a9ebb3767";
let city = 'Tucson';

function getApi() {
    var requestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var lat = data[0].lat;
            var lon = data[0].lon;
            var city = data[0].name

            console.log(data);
            console.log('lat', lat);
            console.log('lon', lon);
            console.log('name', city);
            getWeather(lat, lon, city);
    });
}

function getWeather(lat, lon, city) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            let temp = data.main.temp;
            let humidity = data.main.humidity;
            let windSpeed = data.wind.speed;
            
            document.getElementById('currentWeather').innerHTML =

            `<div class='current'>
                <h3>${city}</h3>
                <p>Temp: <span>${temp}</span></p>
                <p>Humidity: <span>${humidity}</span></p> 
                <p>Wind Speed: <span>${windSpeed}</span></p>
            </div>`
        })
}

getApi();


const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");

btn.addEventListener("click", getQuote);

function getQuote() {
    fetch("http://quotable.io/random")
    .then( res => res.json())
    .then(data => {
        quote.innerHTML =`"${data.content}"`;
        author.innerHTML = data.author;
    })
}


