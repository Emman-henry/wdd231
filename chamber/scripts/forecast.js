async function fetchThreeDayForecast() {
  const API_KEY = '3a61459b4ae6088c250c9c2e000753d4';
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=6.5244&lon=3.3792&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Forecast data not available");

    const data = await response.json();

    // Group forecast by day
    const days = {};
    data.list.forEach(item => {
      const date = new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      if (!days[date]) days[date] = [];
      days[date].push(item.main.temp);
    });

    // Get only the next 3 days
    const forecastContainer = document.getElementById('weather-forecast');
    forecastContainer.innerHTML = '<h2>3-Day Forecast</h2>';

    Object.keys(days).slice(0, 3).forEach(date => {
      const temps = days[date];
      const min = Math.min(...temps).toFixed(1);
      const max = Math.max(...temps).toFixed(1);

      const card = document.createElement('div');
      card.classList.add('forecast-card');
      card.innerHTML = `
        <h3>${date}</h3>
        <p><strong>Min:</strong> ${min}°C</p>
        <p><strong>Max:</strong> ${max}°C</p>
      `;
      forecastContainer.appendChild(card);
    });

  } catch (error) {
    console.error("❌ Error fetching forecast:", error);
  }
}
fetchThreeDayForecast();
