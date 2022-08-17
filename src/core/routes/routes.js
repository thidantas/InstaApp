import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import routes from '../constants/routes';
import HomeNavigationStack from '../../features/home/navigation';
import CommentsNavigationStack from '../../features/comments/navigation';

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
