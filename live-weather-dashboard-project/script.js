const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const weatherResult = document.querySelector(".weatherResult");
/*
 * API Configuration
 * IMPORTANT: Replace 'YOUR_API_KEY_HERE' with a valid key from OpenWeather.
 * Register for a free key at https://home.openweathermap.org/users/sign_up
 */
const apikey = "YOUR_API_KEY_HERE";

weatherForm.addEventListener("submit" , async event =>{
    event.preventDefault();

    const city = cityInput.value.trim();

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }catch(error){
            displayError(error);
        }

    }else{
        displayError("Please enter a city name!");
    }
});

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw new Error("could not fetch weather data");
    }
    return await response.json();
}

function displayWeatherInfo(weatherData){
    console.log(weatherData);
    const {name:city,main:{humidity,temp},weather:[{id,description}]} = weatherData;

    weatherResult.textContent="";
    weatherResult.style.display = 'flex';

    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humidDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const emojiDisplay = document.createElement('p');
    
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${temp}°C`;
    humidDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    emojiDisplay.textContent = gettingEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidDisplay.classList.add("humidDisplay");
    descDisplay.classList.add("descDisplay");
    emojiDisplay.classList.add("emojiDisplay");

    weatherResult.append(cityDisplay,tempDisplay,humidDisplay,descDisplay,emojiDisplay);
}

function gettingEmoji(id){
    switch(true){
        case (id>=200 && id <300) :
            return "⛈️";
        case (id>=300 && id<400) :
            return "🌦️";
        case (id>=500 && id<600) :
            return "🌧️";
        case (id>=600 && id<700) :
            return "❄️";
        case (id>=700 && id<800) :
            return "💨";   
        case (id===800) :
            return"☀️";    
        case (id>=801 && id<810) :
            return "☁️";        
        default : 
            return "?";
    }
}

function displayError(msg){
    const errorDisplay = document.createElement("p");
    errorDisplay.classList.add("errorDisplay");
    errorDisplay.textContent = msg;

    weatherResult.textContent="";
    weatherResult.style.display = "flex";
    weatherResult.append(errorDisplay);
}



