console.log("starts now")

const apiKey = "208382e160738c4bd3319da71c3abe22";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function weatherNow(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
if(response.status== 404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";

} else{



    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + ` °F`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + ` %`;
    document.querySelector(".wind").innerHTML = data.wind.speed + ` mph`;

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-512.png"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-512.png"
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_16-512.png"
    } else if (data.weather[0].main == "Windy") {
        weatherIcon.src = "https://cdn4.iconfinder.com/data/icons/weatherful/72/Foggy_Cloud-512.png"
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-24-512.png"
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_13-512.png"
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "https://cdn4.iconfinder.com/data/icons/weatherful/72/Snowing-512.png"
    }
    document.querySelector(".weather").style.display="block";
    // document.querySelector(".weather").style.display="none";

}
}
searchBtn.addEventListener("click", () => {
    weatherNow(searchBox.value);
})


// weatherNow();