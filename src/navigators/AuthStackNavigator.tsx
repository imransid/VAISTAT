import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  AccountVerification,
  FAQ,
  OTPVerification,
  PhoneVerification,
  Profile,
  SignIn,
  SignUp
} from '@/screens';

import AppStackNavigator from './AppStackNavigator';

const Stack = createNativeStackNavigator();

function AuthStackNav(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={'SignIn'}
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="AccountVerification" component={AccountVerification} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
      <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="AppStack" component={AppStackNavigator} />
    </Stack.Navigator>
  );
}

export default AuthStackNav;
