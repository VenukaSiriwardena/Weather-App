const weatherDiv = document.getElementById('error-handling');
const location_name = document.getElementById('city-name');
const temperature = document.getElementById('temp');
const weather = document.getElementById('weather-type');
const humidity = document.getElementById('humid');
const speed = document.getElementById('speed');

weatherDiv.style.display = "none";
location_name.style.display = "none";
temperature.style.display = "none";
weather.style.display = "none";
humidity.style.display = "none";
speed.style.display = "none";

window.onload = function() {
    setInterval(function(){
        var date = new Date();
        
        // Customize the date format
        var dateOptions = { 
            month: 'long', 
            day: '2-digit' 
        };
        var displayDate = date.toLocaleDateString('en-US', dateOptions);

        var timeOptions = { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        };
        var displayTime = date.toLocaleTimeString('en-US', timeOptions);

        // Update the element with the formatted date and time
        document.getElementById('weather-date-time').innerHTML = displayDate + " " + "|" + " " + displayTime;
    }, 1000);
    
    top_city_1();
    top_city_2();
    top_city_3();
}

function getLocation() {
    const location = document.getElementById("error-handling");
    if (navigator.geolocation) {
        location.innerHTML = "Loading...";
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        location.innerHTML = "Geolocation is not supported by this browser.";
    }
}

async function showPosition(position) {
    const api_key = 'd001faf11c688e6acb3d854a17606802';
    const weather_info_link = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${api_key}&units=metric`;
    try {
        const response = await fetch(weather_info_link);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching the weather data', error);
    }
}

async function searchWeather() {
    const api_key = 'd001faf11c688e6acb3d854a17606802';

    let city_name = document.getElementById("search-city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching the weather data', error);
    }
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('error-handling');
    const location_name = document.getElementById('city-name');
    const temperature = document.getElementById('temp');
    const weather = document.getElementById('weather-type');
    const humidity = document.getElementById('humid');
    const speed = document.getElementById('speed');
    if (data.cod === 200) {
        const topWeatherStatus = document.querySelector(".top-weather-status");
        if (topWeatherStatus) {
            topWeatherStatus.style.display = "none";
        } 
        
        weatherDiv.style.display = "block";
        location_name.style.display = "block";
        temperature.style.display = "block";
        weather.style.display = "block";
        humidity.style.display = "block";
        speed.style.display = "block";

        weatherDiv.innerHTML = "";     
        location_name.innerHTML = `<h2 id="name">${data.name}</h2> <h2>${data.sys.country}</h2>`;
        temperature.innerHTML = `<h2 id="name">${Math.round(data.main.temp)}</h2> <h2>°C</h2>`;
        weather.innerHTML = `<h2 id="name">${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}</h2>`;
        humidity.innerHTML = `<h2 id="name">${data.main.humidity}</h2> <h2>%</h2>`;
        speed.innerHTML = `<h2 id="name">${data.wind.speed}</h2> <h2>m/s</h2>`;

    } else {
        weatherDiv.innerHTML = `<p>City not found!</p>`;
    }
}

async function top_city_1() {
    const api_key = 'd001faf11c688e6acb3d854a17606802';
    var weatherDiv = document.getElementById('new-y');
    var back_colour = document.getElementById('top-location-1');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${api_key}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        weatherDiv.innerHTML = `<p>${data.main.temp} °C</p>`;

        if (data.main.temp >= 26) {
            back_colour.style.backgroundColor = 'rgb(255, 165, 0)';
        } else {
            back_colour.style.backgroundColor = 'rgb(0, 0, 255)';
        }
    } catch (error) {
        console.error('Error fetching the weather data', error);
    }
}


async function top_city_2() {
    const api_key = 'd001faf11c688e6acb3d854a17606802';
    let weatherDiv = document.getElementById('london');
    var back_colour = document.getElementById('top-location-2');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${api_key}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        weatherDiv.innerHTML = `<p>${data.main.temp} °C</p>`;

        if (data.main.temp >= 26) {
            back_colour.style.backgroundColor = 'rgb(255, 165, 0)';
        } else {
            back_colour.style.backgroundColor = 'rgb(0, 0, 255)';
        }
    } catch (error) {
        console.error('Error fetching the weather data', error);
    }
}

async function top_city_3() {
    const api_key = 'd001faf11c688e6acb3d854a17606802';
    let weatherDiv = document.getElementById('tokyo');
    var back_colour = document.getElementById('top-location-3');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${api_key}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        weatherDiv.innerHTML = `<p>${data.main.temp} °C</p>`;

        if (data.main.temp >= 26) {
            back_colour.style.backgroundColor = 'rgb(255, 165, 0)';
        } else {
            back_colour.style.backgroundColor = 'rgb(0, 0, 255)';
        }
    } catch (error) {
        console.error('Error fetching the weather data', error);
    }
}
