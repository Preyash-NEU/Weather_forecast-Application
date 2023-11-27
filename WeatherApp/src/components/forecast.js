import React from "react";
import DayForecast from "./dailyforecast";
import RainySvg from "./../assets/10d.png";
import CloudySvg from "./../assets/03d.png";
import SunnySvg from "./../assets/01d.png";
import WindySvg from "./../assets/windysvg.svg";
import { Link } from "react-router-dom";

const Forecast = ({ data }) => {
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
    <Link to={`/${(data.list[0].dt_txt.split(" ")[0])}`}>
    <div>
      <h2 style={{ color: "black", padding: "1em", margin: "1em" }}>
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
          {if(index%6==0)return <div
            key={index}
            style={{
              background: "rgba(60, 60, 60,0.5)",
              margin: "1em",
              padding: "0em",
              borderRadius: "20px",
              color: "black",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "start",
              width: "18%",
              minWidth:"250px",
              
            }}
          >
            <h2>{convertDateFormat(forecast.dt_txt)}</h2>
            <h4>Max Temperature: {forecast.main.temp_min} K</h4>
            <h4>Min Temperature: {forecast.main.temp_max} K</h4>
            <p>
              <img
                src={typeofWeather(forecast.weather[0].description)}
                alt={forecast.weather[0].description}
                style={{ width: "100px", margin: "1em" }}
              />
            </p>
            <h4>Humidity Level: {forecast.main.humidity}%</h4>
            <h4>Wind Speed: {forecast.wind.speed} m/s</h4>
          </div>; 
          else return null
          })}
      </div>
    </div>
    </Link>
  );
};

export default Forecast;
