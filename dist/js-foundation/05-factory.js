"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ generateUuid, getAge }) => {
    return ({ name, birthDate }) => {
        return {
            id: generateUuid(),
            name,
            birthDate,
            age: getAge(birthDate),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
