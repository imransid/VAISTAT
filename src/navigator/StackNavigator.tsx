import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { type RootStackParamList } from '../models';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration';

import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = (): React.ReactNode => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
