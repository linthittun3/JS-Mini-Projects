const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "221c2537d1defd6d226270e885d98188";

weatherForm.addEventListener("submit", async (e) =>{
    e.preventDefault();
    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }else{
        displayError("Please Enter a city");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    console.log(response);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
}

function displayWeatherInfo(data){
    const {name: city,
           main: {temp, humidity},
           weather: [{description, id}]} = data;
    
    card.textContent = "";
    card.style.display = "flex";
    
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = getWeatherEmoji(id);

    cityDisplay.textContent = city;
    tempDisplay.textContent = (`${(temp - 273.15).toFixed(0)}⁰C`);
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);

    console.log(data);
}

function getWeatherEmoji(weatherId){
    const img = document.createElement('img');
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            img.src = 'img/thunderStorm.png';
            img.alt = 'Thunder Storm';
            return img;
            break;
        case (weatherId >= 300 && weatherId < 400):
            img.src = 'img/drizzle.png';
            img.alt = 'drizzle';
            return img;
            break;
        case (weatherId >= 500 && weatherId < 600):
            img.src = 'img/showerRain.png';
            img.alt = 'Heavy Rain';
            return img;
            break;
        case (weatherId >= 600 && weatherId < 700):
            img.src = 'img/snow.png';
            img.alt = 'Snowing';
            return img;
            break;
        case (weatherId >= 700 && weatherId < 800):
            img.src = 'img/mist.png';
            img.alt = 'Foggy';
            return img;
            break;
        case (weatherId === 800):
            img.src = 'img/clearSky.png';
            img.alt = 'Sunny';
            return img;
            break;
        case (weatherId >= 801 && weatherId < 810):
            img.src = 'img/fewClouds.png';
            img.alt = 'Cloudy';
            return img;
            break;
        default:
            return "?";
    }
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}