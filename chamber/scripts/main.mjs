async function fetchWeather() {
  const API_KEY = '3a61459b4ae6088c250c9c2e000753d4';
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=alerts,hourly,minutely&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const current = data.current;
    const today = data.daily[0];

    const weatherData = {
      temp: current.temp,
      description: current.weather[0].description,
      high: today.temp.max,
      low: today.temp.min,
      humidity: current.humidity,
      sunrise: formatTime(current.sunrise),
      sunset: formatTime(current.sunset)
    };

    const card = createWeatherCard(weatherData);
    const container = document.getElementById('current-weather');
    if (container) container.appendChild(card);

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

// Call the function
fetchWeather();
