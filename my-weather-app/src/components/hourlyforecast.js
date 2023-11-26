import React from 'react';
import DayForecast from "./dailyforecast";
import RainySvg from "./../assets/rainysvg.svg";
import CloudySvg from "./../assets/cloudysvg.svg";
import SunnySvg from "./../assets/sunnysvg.svg";
import WindySvg from "./../assets/windysvg.svg";

const HourlyForecast = ({ data,day }) => {
  function convertDateFormat(inputString) {
    const inputDate = new Date(inputString);
    if (isNaN(inputDate.getTime())) {
      return "Invalid date";
    }
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = inputDate.toLocaleDateString("en-US", options);

    return formattedDate;
  }

  const typeofWeather = (weather) => {
    if (weather.includes("rain")) {
      return RainySvg;
    } else if (weather.includes("cloud")) {
      return CloudySvg;
    } else if (weather.includes("wind")) {
      return WindySvg;
    } else if (weather.includes("sun")) {
      return SunnySvg;
    } else return SunnySvg;
  };
  return (
    <div>
      <h2 style={{ color: "white", padding: "1em", margin: "1em" }}>
        {data.city.name}, {data.city.country}
      </h2>
      <div
        style={{
          padding: "1em",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          overflowX:"scroll"
        }}
      >
        {data.list.map((forecast, index) => 
          {
            if(forecast.dt_txt.includes( day))return <div
          
            key={index}
            style={{
              background: "rgba(60, 60, 60,0.3)",
              margin: "1em",
              padding: "1em",
              borderRadius: "20px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "start",
              width: "18%",
              minWidth:"250px",
              
            }}
          >
            <h2>{forecast.dt_txt.split(" ")[1]}</h2>
            <h4> {forecast.main.temp} K</h4>
            <p>
              <img
                src={typeofWeather(forecast.weather[0].description)}
                alt={forecast.weather[0].description}
                style={{ width: "100px", margin: "1em" }}
              />
            </p>
            <h4>Humidity: {forecast.main.humidity}%</h4>
            <h4>Wind Speed: {forecast.wind.speed} m/s</h4>
          </div>; 
          else return null
          })}
      </div>
    </div>
  );
};

export default HourlyForecast;
