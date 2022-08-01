import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Feed from './screens/Feed';
import Saved from './screens/Saved';

import HomeIcon from './assets/icons/home.svg';
import BookMarkIcon from './assets/icons/bookmark.svg';
import routes from '../../core/constants/routes';

const Tab = createBottomTabNavigator();

const HomeNavigationStack = () => (
  <Tab.Navigator
    initialRouteName={routes.Home.Saved}
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 73,
        backgroundColor: '#fff',
        borderTopWidth: 0,
        paddingTop: 10,
        paddingBottom: 40,
      },
    }}>
    <Tab.Screen
      name={routes.Home.Feed}
      component={Feed}
      options={{
        tabBarIcon: () => <HomeIcon width={21} height={21} />,
      }}
    />
    <Tab.Screen
      name={routes.Home.Saved}
      component={Saved}
      options={{
        tabBarIcon: () => <BookMarkIcon width={21} height={21} />,
      }}
    />
  </Tab.Navigator>
);

export default HomeNavigationStack;
