import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Main from './models/Main';

// import './assets/main.css';

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	const { RealmProvider } = Main;

	if (!isLoadingComplete) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<RealmProvider>
				<Navigation colorScheme={colorScheme} />
				<StatusBar />
			</RealmProvider>
		</SafeAreaProvider>
	);
}
