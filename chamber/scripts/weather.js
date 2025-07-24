async function fetchWeather() {
  const API_KEY = '3a61459b4ae6088c250c9c2e000753d4';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=6.5244&lon=3.3792&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Weather data not available");

    const data = await response.json();

    const weatherData = {
      temp: data.main.temp,
      description: capitalize(data.weather[0].description),
      high: data.main.temp_max,
      low: data.main.temp_min,
      humidity: data.main.humidity,
      sunrise: formatTime(data.sys.sunrise),
      sunset: formatTime(data.sys.sunset)
    };

    const card = createWeatherCard(weatherData);
    const container = document.getElementById('current-weather');
    if (container) {
      container.innerHTML = '';
      container.appendChild(card);
    } else {
      console.error("❌ No container found with ID current-weather");
    }

  } catch (error) {
    console.error("❌ Error fetching weather:", error);
  }
}

function createWeatherCard(weather) {
  const card = document.createElement('div');
  card.classList.add('weather-card');
  card.innerHTML = `
    <h2>Current Weather</h2>
    <p><strong>Temperature:</strong> ${weather.temp}°C</p>
    <p><strong>Description:</strong> ${weather.description}</p>
    <p><strong>High:</strong> ${weather.high}°C</p>
    <p><strong>Low:</strong> ${weather.low}°C</p>
    <p><strong>Humidity:</strong> ${weather.humidity}%</p>
    <p><strong>Sunrise:</strong> ${weather.sunrise}</p>
    <p><strong>Sunset:</strong> ${weather.sunset}</p>
  `;
  return card;
}

function formatTime(unixTime) {
  return new Date(unixTime * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

fetchWeather(); // run on page load
