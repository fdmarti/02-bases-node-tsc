interface User {
	id: number;
	name: string;
}

const users: User[] = [
	{
		id: 1,
		name: 'John Doe',
	},
	{
		id: 2,
		name: 'Jan Doe',
	},
];

export const getUserById = ( id: number, callback: (err?: string, user?: User) => void) => {
	const user = users.find((user) => user.id === id);

	if (!user) {
        return callback(`USER NOT FOUND WITH ID ${id}`);
    }

	return callback(undefined, user);
};
