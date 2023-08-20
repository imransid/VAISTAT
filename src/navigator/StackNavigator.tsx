import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../models';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Registration' component={Registration}/>
          <Stack.Screen name='Drawer' component={DrawerNavigator} options={{ headerShown: false }}/>
        </Stack.Navigator>
      );
}

export default StackNavigator