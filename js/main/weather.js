async function fetchWeather() {
    try {
        const geoResponse = await fetch('https://ip-api.com/json/'); // HTTPS
        const geoData = await geoResponse.json();
        
        const city = geoData.city || 'Aktau';
        const lat = geoData.lat;
        const lon = geoData.lon;

        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`
        );
        
        if (!weatherResponse.ok) throw new Error('Weather unavailable');
        
        const weather = await weatherResponse.json();
        const temp = Math.round(weather.current_weather.temperature);
        const windSpeed = Math.round(weather.current_weather.windspeed);
        const humidity = weather.current_weather.relativehumidity ?? 'N/A';
        
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
