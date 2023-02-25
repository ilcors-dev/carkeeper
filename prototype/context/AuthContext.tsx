import React, { useState } from 'react';
import { Results } from 'realm';
import ContextCreation from '../models/ContextCreation';
import { User } from '../models/User';

interface AuthState {
	user: null | User;
	isLoggedIn: boolean;
	loginError: string | null;
}

export interface AuthStateContext extends AuthState {
	login: (telephone: string, pin: string) => boolean;
	logout: () => void;
}

const initialState: AuthState = {
	user: null,
	isLoggedIn: false,
	loginError: null as string | null,
};

export const AuthContext = React.createContext<AuthStateContext | null>(null);

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: Props) => {
	const [state, setState] = useState<AuthState>(initialState);
	const { useRealm } = ContextCreation;
	const realm = useRealm();

	const login = (telephone: string, pin: string) => {
		console.log(`Logging in with telephone: ${telephone} and pin: ${pin}`);

		const matching = realm
			.objects('User')
			.filtered(`telephone = "${telephone}"`) as Results<User>;

		if (matching.length === 0) {
			setState({
				...state,
				loginError: 'User not found',
			});
			return false;
		}

		const user = matching[0];

		if (user.pin !== pin) {
			setState({
				...state,
				loginError: 'Wrong pin',
			});
			return false;
		}

		setState({
			...state,
			user,
			isLoggedIn: true,
			loginError: null,
		});

		return true;
	};

	const logout = () => {
		setState({
			...state,
			user: null,
			isLoggedIn: false,
			loginError: null,
		});
	};

	return (
		<AuthContext.Provider value={{ ...state, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
