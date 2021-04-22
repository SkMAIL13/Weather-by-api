let select = document.querySelector('#select');

http://api.openweathermap.org/data/2.5/weather?id=498817&appid=ad2453a611a485478129e8a13423e568


function createWeather() {
   let city = select.value;
   let url = `http://api.openweathermap.org/data/2.5/weather?q=${select.value}&appid=ad2453a611a485478129e8a13423e568`;

    fetch(url)
    .then(function (resp) {return resp.json()})
    .then(function (data) {
    console.log(data);
    document.querySelector('.package-name').textContent = data.name;
    document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg';
    document.querySelector('.pressure').innerHTML = 'Давление : ' + Math.round(data.main.pressure / 1.333) + ' ' + 'Миллиметров ртутного столба';
    document.querySelector('.disclaimer').textContent = data.weather[0].description;
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
    })
    .catch(function () {
    // catch any errors
    });
}

document.querySelector('.button-primary').addEventListener('click', createWeather);