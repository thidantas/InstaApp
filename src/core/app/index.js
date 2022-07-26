import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '../routes/routes';

const App = () => (
  <NavigationContainer>
    <StatusBar
      backgroundColor="#fff"
      barStyle="dark-content"
      translucent={false}
    />
    <Routes />
  </NavigationContainer>
);

export default App;
