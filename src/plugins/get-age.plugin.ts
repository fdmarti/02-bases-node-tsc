const getAgePlugin = require('get-age');

export const getAge = (birthdate: string) : string => {
	return getAgePlugin(birthdate);
};
