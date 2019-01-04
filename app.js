// Cuando no tenemos mas comandos ademas del nombre de la "app" podemos usar .options
const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener clima',
            demand: true
        }
    }).argv;

const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');


let getInfo = async(direccion) => {
    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);

    return `El clima en ${coors.direccion} es de ${temp}`;
}


getInfo(argv.direccion)
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(err => {
        console.log(err);
    });



// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => {
//         console.log(err);
//     });