import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNavigationStack from '../../features/home/navigation';
import Comments from '../../features/home/screens/Comments';

const Stack = createNativeStackNavigator();

const Routes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeNavigationStack}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Comments" component={Comments} />
  </Stack.Navigator>
);

export default Routes;
