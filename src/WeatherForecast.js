import React from "react";
import "./weatherForecast.css";


export default function WeatherForecast(props){
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