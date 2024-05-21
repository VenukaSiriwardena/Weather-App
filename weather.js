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

    const topWeatherStatus = document.querySelector(".top-weather-status");
    if (topWeatherStatus) {
        topWeatherStatus.style.display = "none";
    }

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
    if (data.cod === 200) {
        weatherDiv.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity} %</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
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
