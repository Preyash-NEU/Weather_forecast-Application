import React, { useEffect, useState } from "react";
import Forecast from "../components/forecast";
import bgm from "./../assets/background.jpg";

const FiveDayForecast = () => {
  const [data_,setData] = useState(null)
  useEffect(() => {
    const API_KEY = "9d6a3809ebdb4fab39bdfe20a69c7313";
    const lat = "36.778259";
    const lon = "-119.417931";
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <h1
        style={{
          position: "absolute",
          width: "100%",
          margin: "0em",
          padding: "0.5em 0",
          backgroundColor: "grey",
          color: "Green",
          top: "0px",
          textAlign:"center"
        }}
      >
        5-Day Weather Forecast
      </h1>
      <div
        style={{
          background: `url(${bgm})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          paddingTop:"2.5em"
        }}
      >
        <div style={{ background: "rgba(0,0,0,0.5)", minHeight: "100vh" }}>
          {data_?<Forecast data={data_} />:null}
        </div>
      </div>
    </>
  );
};

export default FiveDayForecast;
