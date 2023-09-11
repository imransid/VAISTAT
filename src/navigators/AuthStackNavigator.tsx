import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '@/screens';

const Stack = createNativeStackNavigator();

function AuthStackNav(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

export default AuthStackNav;
