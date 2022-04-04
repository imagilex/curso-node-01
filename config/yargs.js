const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'limite',
                    type: 'number',
                    demandOption: false,
                    default: 10,
                    describe: 'Limite máximo de la tabla de mutiplicar'
                })
                .option('m', {
                    alias: 'mostrar',
                    type: 'boolean',
                    demandOption: false,
                    default: false,
                    describe: 'Muestra la tabla de consola'
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)) {
                        throw 'La base debe ser numérica'
                    }
                    if(isNaN(argv.l)) {
                        throw 'El limite debe ser numérico'
                    }
                    return true
                })
                .argv

module.exports = argv