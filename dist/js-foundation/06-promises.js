"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonNameById = void 0;
const plugins_1 = require("../plugins");
const getPokemonNameById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await plugins_1.httpClientPlugin.get(url);
    return pokemon;
};
exports.getPokemonNameById = getPokemonNameById;
