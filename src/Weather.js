import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  let weatherData = {
    city: "Wellington",
    temperature: 15,
    date: "Tuesday 05:11 pm",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 5,
    wind: 10,
    minTemperature: 10,
    maxTemperature: 18,
  };
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
              <li>{weatherData.date}</li>
              <li>
                <span className="description">{weatherData.description}</span>
              </li>
            </ul>
          </div>
          <div className="col-sm">
            <span className="weahter-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt="Sunny"
              />
            </span>
            <br />
            <ul>
              <li>
                {" "}
                L: <span>{weatherData.minTemperature}</span>° | H:{" "}
                <span>{weatherData.maxTemperature}</span>°{" "}
              </li>
            </ul>
          </div>
          <div class="col-sm pt-4">
            <ul>
              <li>
                <span className="temperature">{weatherData.temperature}</span>
                <span className="unit">℃</span>
              </li>
              <li>
                Wind: <span>{weatherData.wind}</span> km/h
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
}
