import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div ClassName="WeatherTemperature">
      <span className="temperature">{props.celsius}</span>
      <span className="unit">℃</span>
    </div>
  );
}
