const city = `Loughborough`
const apiKey = `995665b4f23c4f64b4d233432182605`
const weatherUrl = `https://api.apixu.com/v1/current.json?key=${apiKey}&q=${city}`

let icon = document.querySelector('.icon');
let temp = document.querySelector('.temp');
let type = document.querySelector('.type');

fetch(weatherUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(res) {
    let response = res
    let degrees = response.current.temp_c
    let label = response.current.condition.text;

    type.innerHTML = label;
    temp.innerHTML = degrees;

    if (label.includes('Sunny') || label.includes('Clear')) {
      icon.innerHTML = '☀';
    }

    if (label.includes('snow')) {
      icon.innerHTML = '☃';
    }

    if (label.includes('Cloud') || label.includes('Mist') || label.includes('cloudy') || label.includes('Overcast')) {
      icon.innerHTML = '☁';
    }

    if (label.includes('Rain') || label.includes('rain') || label.includes('drizzle')) {
      icon.innerHTML = '☂';
    }
  });
