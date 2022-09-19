// Weather Api
const apiKey = "429887647bf3ecdf39b717ebe5271ff1";
let cityInput = $('#city');
let search = document.querySelector('#searchButton');

function getApi(city) {
    var requestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var lat = data[0].lat;
            var lon = data[0].lon;
            var cityName = data[0].name

            getWeather(lat, lon, cityName);
    });
}

function getWeather(lat, lon, cityName) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            let temp = data.main.temp;
            let humidity = data.main.humidity;
            let windSpeed = data.wind.speed;
            
            document.getElementById('currentWeather').innerHTML =

            `<div class='current'>
                <h3>${cityName}</h3>
                <p>Temp: <span>${temp}°F</span></p>
                <p>Humidity: <span>${humidity}</span></p> 
                <p>Wind Speed: <span>${windSpeed}mph</span></p>
            </div>`
        })
}

//Render last city searched
function getStoredCity() {
    
    if (localStorage.getItem("city")) {
        getApi(localStorage.getItem('city'))
    }
}

search.addEventListener('click', function(event) {
    event.preventDefault();

    let city = document.querySelector('#city').value;

    if (city === "") {
        return;
    } else {
    localStorage.setItem('city', city);
    getApi(city);
    }
});

//Quote
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");

btn.addEventListener("click", getQuote);

function getQuote() {
    fetch("https://quotable.io/random")
    .then( res => res.json())
    .then(data => {
        quote.innerHTML =`"${data.content}"`;
        author.innerHTML = data.author;
    })
}

getStoredCity();
