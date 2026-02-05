async function fetchWeather() {
    try {
        const res = await fetch("weather.json?_=" + Date.now());
        if (!res.ok) throw new Error("Weather JSON unavailable");

        const data = await res.json();
        
        document.getElementById('weatherLocation').textContent = data.city;
        document.getElementById('weatherTemp').textContent = `Temperature: ${data.temperature}°C`;
        document.getElementById('weatherWind').textContent = `Wind: ${data.wind_speed} km/h`;
        document.getElementById('weatherHumidity').textContent = `Humidity: ${data.humidity}%`;

        const updated = new Date(data.updated);
        const timeStr = updated.toTimeString().slice(0,5);
        document.getElementById('weatherUpdated').textContent = `Updated: ${timeStr}`;

        console.log(`[${new Date().toLocaleTimeString()}] Weather updated:`, data);

    } catch (e) {
        console.error("Weather fetch error:", e);
        document.getElementById('weatherLocation').textContent = 'Error';
        document.getElementById('weatherTemp').textContent = 'Temperature: N/A';
        document.getElementById('weatherWind').textContent = 'Wind: N/A';
        document.getElementById('weatherHumidity').textContent = 'Humidity: N/A';
        document.getElementById('weatherUpdated').textContent = '--:--';
    }
}

fetchWeather();
setInterval(fetchWeather, 60000);
