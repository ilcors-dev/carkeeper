import React, { useState } from 'react';
import { Results } from 'realm';
import ContextCreation from '../models/ContextCreation';
import { User } from '../models/User';

interface AuthState {
	user: null;
	isLoggedIn: boolean;
	loginError: string | null;
}

export interface AuthStateContext extends AuthState {
	login: (telephone: string, pin: string) => void;
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

	const setLoginSuccess = (isLoggedIn: boolean) =>
		setState({
			...state,
			isLoggedIn,
		});

	const setLoginError = (loginError: string | null) =>
		setState({ ...state, loginError });

	const login = (telephone: string, pin: string) => {
		console.log(`Logging in with telephone: ${telephone} and pin: ${pin}`);

		const matching = realm
			.objects('User')
			.filtered(`telephone = "${telephone}"`) as Results<User>;

		if (matching.length === 0) {
			setLoginError('User not found');
			return;
		}

		const user = matching[0];

		if (user.pin !== pin) {
			setLoginSuccess(false);
			setLoginError('Wrong pin');
			return;
		}

		setLoginSuccess(true);
		setLoginError(null);
	};

	const logout = () => {
		setLoginSuccess(false);
		setLoginError(null);
	};

	return (
		<AuthContext.Provider value={{ ...state, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
