import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNavigationStack from '../../features/home/navigation';

const Stack = createNativeStackNavigator();

const Routes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeNavigationStack}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default Routes;
