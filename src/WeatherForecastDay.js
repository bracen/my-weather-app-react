import React from "react";

export default function WeatherForecastDay(props){
  
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day(){
    let date=new Date(props.data.dt*1000);
    let day=date.getDay();

    let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    return days[day];
  }

  function icon()
{
 let icon=`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`
 return icon;
}
return (
  <div className="WeatherForecastDay">
    <div className="forecast-day">{day()}</div>
    <div className="forecast-icon">
      <img src={icon()} alt="" />
    </div>
    <div className="forecast-temp">
      <span className="forecast-temp-max"> {maxTemperature()}º </span>|{" "}
      <span className="forecast-temp-min">{minTemperature()}º</span>
    </div>
  </div>
);
}





