import axios from "axios";
import React from "react";
import "./weatherForecast.css";


export default function WeatherForecast(props){
  function handleResponse(response){
    console.log(response.data);
  }
  console.log(props);

  let key = `7aa24630d378d5abf1d82ac33ae578d1`;
  let lon= props.data.coordinates.lon;
  let lat = props.data.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={key}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="forecast-day">Sun</div>
          </div>
          <div className="forecast-icon">
            <img src="http://openweathermap.org/img/wn/03d@2x.png"/>
          </div>
          <div className="forecast-temp">
            <span className="forecast-temp-max"> 19º </span>|{" "}
            <span className="forecast-temp-min">11º</span>
          </div>
        </div>
      </div>
    );

}