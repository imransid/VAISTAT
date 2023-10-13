import React, { type FC } from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';

// import AppStackNavigator from './AppStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';

const Navigator: FC = () => {
  return (
    <NavigationContainer>
      {/* <AppStackNavigator /> */}
      <BottomSheetModalProvider>
        <AuthStackNavigator />
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
};

export default Navigator;
