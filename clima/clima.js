const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=2931af5f12c881f00483129c9d9b8a1a`);

    if (!resp) {
        throw new Error('No hay resultado de clima');
    }

    let temp = resp.data.main.temp;
    return temp;
}

module.exports = {
    getClima
}