import React, { type FC } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { type RootState } from '@/store';

import AppStackNavigator from './AppStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';

const Navigator: FC = () => {
  const logStatus = useSelector((state: RootState) => state.users.user.loginStatus);

  return (
    <NavigationContainer>
      {logStatus ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
