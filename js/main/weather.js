async function fetchWeather() {
    try {
        const geoResponse = await fetch('https://ip-api.com/json/');
        if (!geoResponse.ok) throw new Error('Geo unavailable');

        const geo = await geoResponse.json();

        const city = geo.city || 'Unknown';
        const lat = geo.lat;
        const lon = geo.lon;

        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relative_humidity_2m&timezone=auto`
        );
        if (!weatherResponse.ok) throw new Error('Weather unavailable');

        const weather = await weatherResponse.json();

        const temp = Math.round(weather.current_weather.temperature);
        const wind = Math.round(weather.current_weather.windspeed);

        const humidity = weather.hourly.relative_humidity_2m[0];

        document.getElementById('weatherLocation').textContent = city;
        document.getElementById('weatherTemp').textContent = `Temperature: ${temp}°C`;
        document.getElementById('weatherHumidity').textContent = `Humidity: ${humidity}%`;
        document.getElementById('weatherWind').textContent = `Wind: ${wind} km/h`;

        const now = new Date();
        document.getElementById('weatherUpdated').textContent =
            `Updated: ${now.toTimeString().slice(0, 5)}`;

    } catch (e) {
        console.error(e);
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
