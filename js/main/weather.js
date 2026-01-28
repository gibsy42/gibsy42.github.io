async function fetchWeather() {
    try {
        const geoResponse = await fetch('https://ipapi.co/json/');
        const geoData = await geoResponse.json();
        
        const city = geoData.city || 'Aktau';
        
        const apiKey = 'b6907d289e10d714a6e88b30761fae22';
        const weatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        
        if (!weatherResponse.ok) {
            throw new Error('Weather unavailable');
        }
        
        const weather = await weatherResponse.json();
        
        const temp = Math.round(weather.main.temp);
        const humidity = weather.main.humidity;
        const windSpeed = Math.round(weather.wind.speed * 3.6);
        
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
