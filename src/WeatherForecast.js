import axios from "axios";
import React, { useState } from "react";
import "./weatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response);

    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">{forecast[0].dt * 1000}</div>
          <div className="forecast-icon">{forecast[0].weather[0].icon}</div>
          <div className="forecast-temp">
            <span className="forecast-temp-max">
              {" "}
              {forecast[0].main.temp_max}º{" "}
            </span>
            |{" "}
            <span className="forecast-temp-min">
              {forecast[0].main.temp_min}º
            </span>
          </div>
        </div>
      </div>
    </div>;
  } else {
    let key = `cd173a006b0e51dac58c6d8064c94178`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "preparing..";
  }
}
