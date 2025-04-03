import axios from 'axios';

const API_KEY = '11b77d531bc0c5c6a6a0d34dd9166e70';
const city = 'London';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

axios.get(url)
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));
