import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate"
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
      date: new Date(response.data.dt*1000),
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
        <div className="container w-90 small p-4 my-3 text-center">
          <div className="row city">
            <div className="col-sm pt-4 text-center">
              <span className="city">{weatherData.city}</span>
              <br />
              <ul>
                <li><FormattedDate date={weatherData.date}/></li>
                <li>
                  <span className="description">{weatherData.description}</span>
                </li>
              </ul>
            </div>
            <div className="col-sm">
              <span className="weahter-icon">
                <img src={weatherData.iconUrl} alt={weatherData.description} />
              </span>
              <br />
              <ul>
                <li>
                  {" "}
                  L: <span>{Math.round(weatherData.minTemperature)}</span>° | H:{" "}
                  <span>{Math.round(weatherData.maxTemperature)}</span>°{" "}
                </li>
              </ul>
            </div>
            <div class="col-sm pt-4">
              <ul>
                <li>
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit">℃</span>
                </li>
                <li>
                  Wind: <span>{Math.round(weatherData.wind)}</span> km/h
                </li>
                <li>
                  Humidity: <span>{weatherData.humidity}</span> %
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="forecast text-center px-5 pt-2"></div>
      </div>
    );
  } else {
    let key = `7aa24630d378d5abf1d82ac33ae578d1`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading..";
  }
}
