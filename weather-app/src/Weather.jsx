import axios from 'axios';
import React, { useState } from 'react'

function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }
    const fetchWeatherApi = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'7d1724929a0f4be847ae96260c9e88fa'}`)
            setWeather(response)
        } catch (error) {
            console.log("Error Fetching weather data", error)
        }
    }
    const handleGetWeather = () => {
        fetchWeatherApi();
    }
    return (
        <div className="container">
            <h1>Weather App</h1>
            <input type="text" placeholder='Enter City Name' value={city} onChange={handleCityChange} />
            <button onClick={handleGetWeather}>Get Weather</button>
            {weather && (
                <>
                    <div weather-info>
                        <h2>{weather.data.name}</h2>
                        <h3>{weather.data.main.temp}</h3>
                        <h3>{weather.data.weather[0].description}</h3>
                    </div>
                </>
            )}
        </div>
    )
}

export default Weather