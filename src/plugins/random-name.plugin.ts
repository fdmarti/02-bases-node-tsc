const randomName = require('random-name');

export const getRandomName = (): string => {
	return randomName();
};
