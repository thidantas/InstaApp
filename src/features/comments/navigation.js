import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import routes from '../../core/constants/routes';

const Stack = createNativeStackNavigator();

const CommentsNavigationStack = () => (
  <Stack.Navigator initialRouteName={routes.Comments.Home}>
    <Stack.Screen
      name={routes.Comments.Home}
      component={Home}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default CommentsNavigationStack;
