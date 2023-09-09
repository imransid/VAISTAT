import React from 'react';
import { Image, View } from 'react-native';

const AppLogo = (): React.ReactNode => {
  return (
    <View>
      <Image source={require('./img/logo.png')} />
    </View>
  );
};

export default AppLogo;
