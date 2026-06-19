import React from 'react';

function WeatherCard({ weather }) {
  const {
    name,
    sys,
    main,
    weather: weatherInfo,
    wind
  } = weather;

  const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`;

  return (
    <div className="weather-card text-center">
      <h2 className="city-name">{name}, {sys.country}</h2>
      <img src={iconUrl} alt="weather icon" className="weather-icon" />
      <h1 className="temperature">{Math.round(main.temp)}°C</h1>
      <p className="condition">{weatherInfo[0].description}</p>

      <div className="row mt-4">
        <div className="col-4">
          <div className="info-box">
            <p className="info-label">Feels Like</p>
            <p className="info-value">{Math.round(main.feels_like)}°C</p>
          </div>
        </div>
        <div className="col-4">
          <div className="info-box">
            <p className="info-label">Humidity</p>
            <p className="info-value">{main.humidity}%</p>
          </div>
        </div>
        <div className="col-4">
          <div className="info-box">
            <p className="info-label">Wind Speed</p>
            <p className="info-value">{wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;