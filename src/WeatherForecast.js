import axios from "axios";
import React, { useState } from "react";
import "./weatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return(
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <WeatherForecastDay data={forecast[0]}/>
        </div>
      </div>
    </div>);
  } else {
    let key = `e947cb2640f1db92e6a19005bc43b435`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "preparing..";
  }
  }
