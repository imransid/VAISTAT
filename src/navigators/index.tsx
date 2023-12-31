import React, { type FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStackNavigator from './AuthStackNavigator';
// import AppStackNavigator from './AppStackNavigator';

const Navigator: FC = () => {
  return (
    <NavigationContainer>
      {/* <AppStackNavigator /> */}
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
