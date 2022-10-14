import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      minTemperature: response.data.main.temp_min,
      maxTemperature: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search text-center">
          <input
            className="search-input"
            type="text"
            placeholder="serach for city"
          />
          <input type="submit" value="search" />
        </form>
        <WeatherInfo info={weatherData} />
      </div>
    );
  } else {
    let key = `7aa24630d378d5abf1d82ac33ae578d1`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading..";
  }
}
