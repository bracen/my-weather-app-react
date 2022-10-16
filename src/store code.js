function maxTemperature() {
  let temperature = Math.round(props.data.temp.max);
  return `${temperature}`;
}
function minTemperature() {
  let temperature = Math.round(props.data.temp.min);
  return `${temperature}`;
}
return (
  <div ClassName="WeatherForecastDay">
    <div className="forecast-day">{props.data.dt * 1000}</div>
    <div className="forecast-icon">
      <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="" />
    </div>
    <div className="forecast-temp">
      <span className="forecast-temp-max"> {maxTemperature()}º </span>|{" "}
      <span className="forecast-temp-min">{minTemperature()}º</span>
    </div>
  </div>
);


export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setforecast] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    setforecast(response.data.daily);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="forecast-day">{forecast[0].dt * 1000}</div>
            <div className="forecast-icon">{forecast[0].weather[0].icon}</div>
            <div className="forecast-temp">
              <span className="forecast-temp-max">
                {" "}
                {forecast[0].temp.max}º{" "}
              </span>
              |{" "}
              <span className="forecast-temp-min">{forecast[0].temp.min}º</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let key = `7aa24630d378d5abf1d82ac33ae578d1`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
