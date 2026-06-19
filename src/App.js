import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';

const API_KEY = '87867b6d5ce895eaea75bbb4f507b49a';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric'
        }
      });
      setWeather(response.data);
    } catch (err) {
      setError('City not found! Please check the city name and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">🌤️ Weather App</h2>
            <SearchBar onSearch={fetchWeather} />
            {loading && (
              <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            {error && <ErrorMessage message={error} />}
            {weather && <WeatherCard weather={weather} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;