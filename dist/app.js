"use strict";
// const getPokemonById = require('./js-foundation/06-promises')
Object.defineProperty(exports, "__esModule", { value: true });
const plugins_1 = require("./plugins");
// getPokemonById(4)
//     .then(resp => console.log(resp.name))
//     .catch(err => console.log(err))
//     .finally(() => console.log('Llamado finalizado'))
const logger = (0, plugins_1.buildLogger)('app.js');
logger.log('Hola mundo');
logger.error('Esto es un error');
