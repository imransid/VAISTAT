import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FAQ, SignIn, SignUp } from '@/screens';

const Stack = createNativeStackNavigator();

function AuthStackNav(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

export default AuthStackNav;
