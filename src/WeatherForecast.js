import axios from "axios";
import React from "react";
import "./weatherForecast.css";

export default function WeatherForecast(props) {
   
  function handleResponse(response){
    console.log(response.data)
    
  }
  console.log(props);
  
  let key = `7aa24630d378d5abf1d82ac33ae578d1`;
   let longitude = props.coordinates.lon;
   let latitude = props.coordinates.lat;
   let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
   axios.get(apiUrl).then(handleResponse);

return (
<div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="forecast-day">Thurs</div>
            <div className="forecast-icon">icon</div>
            <div className="forecast-temp">
              <span className="forecast-temp-max">
                {" "}
                32º{" "}
              </span>
              |{" "}
              <span className="forecast-temp-min">12º</span>
            </div>
          </div>
        </div>
      </div>)}
