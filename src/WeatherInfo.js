import React from "react";
import FormattedData from "./FormattedData";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="container w-90 small p-4 my-4">
      <div className="row city">
        <div className="col-sm pt-4 text-center">
          <span className="city">{props.data.city}</span>
          <br />
          <ul>
            <li>
              <FormattedData data={props.data.date} />
            </li>
            <li>
              <span className="description">{props.data.description}</span>
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
              <span className="low-high-temp">
                L: {props.data.minTemperature}° | H: {props.data.maxTemperature}
              </span>
              °{" "}
            </li>
          </ul>
        </div>
        <div class="col-sm pt-4">
          <ul>
            <li>
              <WeatherTemperature celsius={props.data.temperature} />
            </li>
            <li>
              Wind: <span>{props.data.wind}</span> km/h
            </li>
            <li>
              Humidity: <span>{props.data.humidity}</span> %
            </li>
          </ul>
        </div>
      </div>

      <div className="forecast text-center px-5 pt-2"></div>
    </div>
  );
}