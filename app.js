/****
 * crear packkage.json con `npm init `
 * correr script con `npm run b20` (ejemplo)
 * 
 */

const {CrearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
let colors = require('colors');

console.clear()

/* const [, , argb='base=5', argl='limite=10'] = process.argv
const [, base=5] = argb.split('=');
const [, limite=10] = argl.split('=');

console.log(process.argv);
console.log(argv);*/

CrearArchivo(argv.base, argv.limite, argv.mostrar)
    .then(arch => console.log(`${arch} creado`.green))
    .catch(error => console.log(error.red));




