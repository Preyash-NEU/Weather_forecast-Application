import React from 'react';

const DayForecast = ({ data }) => {
  const { day, highTemp, lowTemp, weather } = data;
  const getWeatherImage = () => {
    return `images/${weather}.png`;
  };

  return (
    <div className="day-forecast">
      <h2>{day}</h2>
      <img src={getWeatherImage()} alt={weather} />
      <p>High: {highTemp}°C</p>
      <p>Low: {lowTemp}°C</p>
    </div>
  );
};

export default DayForecast;
