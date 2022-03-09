const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const searchWeather = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    setInnerText('min-temp', temperature.main.temp_min);
    setInnerText('max-temp', temperature.main.temp_max);
    setInnerText('humidity', temperature.main.humidity);
    setInnerText('wind', temperature.wind.speed);
    setInnerText('degree', temperature.wind.deg);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}