const bodyContent = document.getElementsByTagName('body');
const date = document.querySelector('#date');
const weatherDeg = document.querySelector('#weatherDegree');
const city = document.querySelector('#city');
const tempImg = document.querySelector('#tempImg');
const tempMax = document.querySelector('#maxTemp');
const tempMin = document.querySelector('#minTemp');
const humadity = document.querySelector('#humadity');
const wind = document.querySelector('#wind');
const coludy = document.querySelector('#cloudy');

let currentDate = new Date();
date.innerHTML = currentDate.toDateString();

const getWeather = async () => {
    try {
        const cityName = document.getElementById('searchBar').value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${"2ec2c3d39fb76d70491abcb15bfa3321"}`, {
            headers: {
                Accept: "application/json"
            }
            
        });
        const data = await response.json();
        city.innerHTML = `${data.name}`;
        weatherDeg.innerHTML = `${Math.round(data.main.temp)}`;
        tempMax.innerHTML = `${Math.round(data.main.temp_max)}°C`;
        tempMin.innerHTML = `${Math.round(data.main.temp_min)}°C`;
        humadity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${data.wind.speed} m/s`;
        coludy.innerHTML = `${data.clouds.all}%`;
        tempImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        bodyContent[0].style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${data.weather[0].main}')`;
        bodyContent[0].style.backgroundSize = 'cover';
        bodyContent[0].style.backgroundPosition = 'center';
        bodyContent[0].style.backgroundRepeat = 'no-repeat';
        data.weather[0].main;
    } catch (error) {
        console.log(error)
    }
};
