"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jan Doe',
    },
];
const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);
    if (!user) {
        return callback(`USER NOT FOUND WITH ID ${id}`);
    }
    return callback(undefined, user);
};
exports.getUserById = getUserById;
