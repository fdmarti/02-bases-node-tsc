"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonNameById = void 0;
const http_client_1 = require("../plugins/http-client");
const getPokemonNameById = async (id) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await http_client_1.httpClientPlugin.get(url);
        return pokemon.name;
    }
    catch (error) {
        throw `Pokemon with the id ${id} not exists`;
    }
};
exports.getPokemonNameById = getPokemonNameById;
