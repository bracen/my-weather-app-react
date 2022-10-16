import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container w-90 small p-4 mt-3 text-center">
        <div className="row city">
          <div className="col-sm pt-4 text-center">
            <span className="city">{props.info.city}</span>
            <br />
            <ul>
              <li>
                <FormattedDate date={props.info.date} />
              </li>
              <li>
                <span className="description">{props.info.description}</span>
              </li>
            </ul>
          </div>
          <div className="col-sm">
            <span className="weahter-icon">
              <img src={props.info.icon} alt="" />
            </span>

            <br />
            <ul>
              <li>
                {" "}
                L: <span>{Math.round(props.info.minTemperature)}</span>° | H:{" "}
                <span>{Math.round(props.info.maxTemperature)}</span>°{" "}
              </li>
            </ul>
          </div>
          <div class="col-sm pt-4">
            <ul>
              <li>
                <span className="temperature">
                  {Math.round(props.info.temperature)}
                </span>
                <span className="unit">℃</span>
              </li>
              <li>
                Wind: <span>{Math.round(props.info.wind)}</span> km/h
              </li>
              <li>
                Humidity: <span>{props.info.humidity}</span> %
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
