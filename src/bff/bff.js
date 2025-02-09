import { getUser } from './get-user';
import { addUser } from './add-user';
import { createSession } from './create-session';

export const server = {
	authorize(authLogin, authPassword) {
		const user = getUser(authLogin);
		if (!user) {
			return {
				error: 'User not found',
				res: null,
			};
		}
		if (authPassword !== user.password) {
			return {
				error: '',
				res: null,
			};
		}

		return {
			error: null,
			res: createSession(user.role_id),
		};
	},
	register(regLogin, regPassword) {
		const user = getUser(regLogin);
		if (user) {
			return {
				error: 'Login not available ',
				res: null,
			};
		}

		addUser(regLogin, regPassword);

		return {
			error: null,
			res: createSession(user.role_id),
		};
	},
};
