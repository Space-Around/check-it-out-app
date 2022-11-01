import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppView from './src/modules/AppView'


function App() {
  return (
    <NavigationContainer>
      <AppView />
    </NavigationContainer>
  );
}

export default App;
