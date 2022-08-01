import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNavigationStack from '../../features/home/navigation';
import CommentsNavigationStack from '../../features/comments/navigation';
import routes from '../constants/routes';

const Stack = createNativeStackNavigator();

const Routes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.Home.itself}
      component={HomeNavigationStack}
      options={{headerShown: false}}
    />

    <Stack.Screen
      name={routes.Comments.itself}
      component={CommentsNavigationStack}
    />
  </Stack.Navigator>
);

export default Routes;
