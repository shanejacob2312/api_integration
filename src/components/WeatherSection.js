import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherSection.css';

const WeatherSection = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('Kochi');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = async (city = 'Kochi') => {
    try {
      setLoading(true);
      setError(null);

      console.log('Fetching weather for:', city, 'using WeatherAPI.com');
      
      const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
        params: {
          key: 'c4ab9c7624254889b59152159250208',
          q: city,
          aqi: 'no'
        }
      });
      
      console.log('WeatherAPI.com response:', response.data);
      
      // Transform WeatherAPI.com data to match our format
      const weatherData = response.data;
      setWeather({
        name: weatherData.location.name,
        main: {
          temp: weatherData.current.temp_c,
          feels_like: weatherData.current.feelslike_c,
          humidity: weatherData.current.humidity,
          pressure: weatherData.current.pressure_mb
        },
        weather: [{
          main: weatherData.current.condition.text,
          description: weatherData.current.condition.text.toLowerCase(),
          icon: weatherData.current.condition.icon
        }],
        wind: {
          speed: weatherData.current.wind_kph / 3.6 // Convert km/h to m/s
        },
        sys: {
          country: weatherData.location.country
        }
      });
    } catch (err) {
      console.error('WeatherAPI.com error:', err.response?.data || err.message);
      
      // Check for specific error types
      if (err.code === 'NETWORK_ERROR' || err.message.includes('Network Error')) {
        setError('Network error: Please check your internet connection and try again.');
      } else if (err.response?.data?.error?.code === 1006) {
        setError('City not found. Please try a different city name.');
      } else if (err.response?.data?.error?.code === 2006) {
        setError('API key error. Please check your WeatherAPI.com key.');
      } else {
        setError(`Weather data unavailable: ${err.response?.data?.error?.message || err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const handleRefresh = () => {
    fetchWeather(location);
  };

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
  };

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      fetchWeather(location);
    }
  };

  const getWeatherIcon = (iconCode) => {
    // WeatherAPI.com uses different icon codes, so we'll use a generic approach
    const weatherText = iconCode.toLowerCase();
    if (weatherText.includes('sunny') || weatherText.includes('clear')) return '☀️';
    if (weatherText.includes('cloudy') || weatherText.includes('overcast')) return '☁️';
    if (weatherText.includes('rain') || weatherText.includes('drizzle')) return '🌧️';
    if (weatherText.includes('snow')) return '❄️';
    if (weatherText.includes('thunder') || weatherText.includes('storm')) return '⛈️';
    if (weatherText.includes('fog') || weatherText.includes('mist')) return '🌫️';
    return '🌤️';
  };

  const getWeatherDescription = (description) => {
    return description.charAt(0).toUpperCase() + description.slice(1);
  };

  return (
    <div className="card weather-card">
      <div className="card-header">
        <div className="card-icon weather-icon">🌤️</div>
        <h2 className="card-title">Weather</h2>
        <button className="refresh-button" onClick={handleRefresh} title="Refresh weather">
          🔄
        </button>
      </div>
      
      {loading ? (
        <div className="loading">Loading weather data...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : weather ? (
        <div className="weather-content">
          <div className="api-info">
            Using: WeatherAPI.com (1M calls/month free)
          </div>
          <form className="location-input" onSubmit={handleLocationSubmit}>
            <input
              type="text"
              value={location}
              onChange={handleLocationChange}
              placeholder="Enter city name..."
              className="location-field"
            />
            <button type="submit" className="location-submit">Search</button>
          </form>
          
          <div className="weather-main">
            <div className="weather-icon-large">
              {getWeatherIcon(weather.weather[0].icon)}
            </div>
            <div className="weather-info">
              <h3 className="city-name">{weather.name}, {weather.sys.country}</h3>
              <div className="temperature">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather-description">
                {getWeatherDescription(weather.weather[0].description)}
              </div>
            </div>
          </div>
          
          <div className="weather-details">
            <div className="detail-item">
              <span className="detail-label">Feels like</span>
              <span className="detail-value">{Math.round(weather.main.feels_like)}°C</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Humidity</span>
              <span className="detail-value">{weather.main.humidity}%</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Wind</span>
              <span className="detail-value">{weather.wind.speed.toFixed(1)} m/s</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Pressure</span>
              <span className="detail-value">{weather.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherSection; 