import React from "react";

const WI = ({ weather }) => {
  if (!weather || !weather.weather || weather.weather.length === 0) {
    return <div></div>;
  }

  return (
    <div className="weather-box">
      <div className="weather-header">{weather.name}</div>

      <div className="temp-row">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="clima"
        />
        <span>{Math.round(weather.main.temp)}°C</span>
      </div>

      <p className="description">{weather.weather[0].description}</p>

      <div className="weather-details">
        <span>Sensação térmica: {Math.round(weather.main.feels_like)}°C</span>
        <span>Umidade: {weather.main.humidity}%</span>
        <span>Pressão: {weather.main.pressure} hPa</span>
      </div>
    </div>
  );
};

export default WI;
