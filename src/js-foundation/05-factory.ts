interface Props {
	generateUuid: () => string;
	getAge: (birthDate: string) => number;
}

interface Person {
    name? : string;
    birthDate : string;
}

export const buildMakePerson = ({ generateUuid, getAge } : Props) => {
	return ({ name, birthDate }: Person) => {
		return {
			id: generateUuid(),
			name,
			birthDate,
			age: getAge(birthDate),
		};
	};
};
