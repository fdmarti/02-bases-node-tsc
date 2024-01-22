"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ generateUuid, getRandomName, getAge }) => {
    return ({ name, birthDate }) => {
        return {
            id: generateUuid(),
            name: name ? name : getRandomName(),
            birthDate,
            age: getAge(birthDate),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
