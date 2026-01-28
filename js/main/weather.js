async function fetchWeather() {
    try {
        const geoResponse = await fetch('http://ip-api.com/json/');
        const geoData = await geoResponse.json();
        
        const city = geoData.city || 'Aktau';
        const lat = geoData.lat;
        const lon = geoData.lon;

        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`
        );
        
        if (!weatherResponse.ok) {
            throw new Error('Weather unavailable');
        }
        
        const weather = await weatherResponse.json();
        
        const temp = Math.round(weather.current.temperature_2m);
        const humidity = weather.current.relative_humidity_2m;
        const windSpeed = Math.round(weather.current.wind_speed_10m);
        
        document.getElementById('weatherLocation').textContent = city;
        document.getElementById('weatherTemp').textContent = `Temperature: ${temp}°C`;
        document.getElementById('weatherHumidity').textContent = `Humidity: ${humidity}%`;
        document.getElementById('weatherWind').textContent = `Wind: ${windSpeed} km/h`;
        
        const now = new Date();
        const timeStr = now.toTimeString().slice(0, 5);
        document.getElementById('weatherUpdated').textContent = `Updated: ${timeStr}`;
        
    } catch (error) {
        console.error('Weather error:', error);
        document.getElementById('weatherLocation').textContent = 'Error';
        document.getElementById('weatherTemp').textContent = 'Temperature: N/A';
        document.getElementById('weatherHumidity').textContent = 'Humidity: N/A';
        document.getElementById('weatherWind').textContent = 'Wind: N/A';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    setInterval(fetchWeather, 600000);
});
