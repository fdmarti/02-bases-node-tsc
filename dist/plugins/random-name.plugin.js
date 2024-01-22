"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomName = void 0;
const randomName = require('random-name');
const getRandomName = () => {
    return randomName();
};
exports.getRandomName = getRandomName;
