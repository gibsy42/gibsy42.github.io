navigator.geolocation.getCurrentPosition(
    async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        const weatherResp = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relative_humidity_2m&timezone=auto`
        );
        const weather = await weatherResp.json();

        const temp = Math.round(weather.current_weather.temperature);
        const wind = Math.round(weather.current_weather.windspeed);
        const humidity = weather.hourly.relative_humidity_2m[0];

        document.getElementById('weatherLocation').textContent = `Your Location`;
        document.getElementById('weatherTemp').textContent = `Temperature: ${temp}°C`;
        document.getElementById('weatherHumidity').textContent = `Humidity: ${humidity}%`;
        document.getElementById('weatherWind').textContent = `Wind: ${wind} km/h`;
    },
    (err) => {
        console.error('Geo error:', err);
        document.getElementById('weatherLocation').textContent = 'Geo unavailable';
    }
);
