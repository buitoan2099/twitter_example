/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
  View,
} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import RootLine from './src/navigation/root';
import { HomeView } from './src/views/homeView';
import LoginView from './src/views/loginView';
import SplashView from './src/views/splashView';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <LoginView /> */}
        {/* <HomeView /> */}
        <RootLine />
        {/* <SplashView /> */}
      </SafeAreaView>
    </PaperProvider>
  );
};
export default App;
