import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '../routes/routes';

const App = () => (
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
);

export default App;
