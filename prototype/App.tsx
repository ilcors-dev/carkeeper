import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './context/AuthContext';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import ContextCreation from './models/ContextCreation';
import Navigation from './navigation';

// import './assets/main.css';

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	const { RealmProvider, useRealm } = ContextCreation;

	// const realmSyncConfig: Partial<Realm.SyncConfiguration> = {
	// 	user: app?.currentUser,
	// 	partitionValue: 'ExpoTemplate',
	// };

	if (!isLoadingComplete) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<RealmProvider>
				<AuthProvider>
					<Navigation colorScheme={colorScheme} />
					<StatusBar />
				</AuthProvider>
			</RealmProvider>
		</SafeAreaProvider>
	);
}
