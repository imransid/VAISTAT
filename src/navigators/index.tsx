import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { NavigationContainer } from '@react-navigation/native';

import { type RootState } from '@/store';

import AppStackNavigator from './AppStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';

const Navigator: FC = () => {
  const logStatus = useSelector((state: RootState) => state.users.user.loginStatus);

  return (
    <NavigationContainer>
      <BottomSheetModalProvider>
        {logStatus ? <AppStackNavigator /> : <AuthStackNavigator />}
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
};

export default Navigator;
