import React, { type FC } from 'react';
import { View } from 'react-native';
import { type BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import AppBarComponent from '@/components/AppBarComponent/AppBarComponent';
import { type BottomTabParamList } from '@/models';

type Props = BottomTabScreenProps<BottomTabParamList>;

const HomeScreen: FC<Props> = ({ navigation, route }: Props): React.ReactNode => {
  return (
    <View>
      <AppBarComponent navigation={navigation} route={route} />
    </View>
  );
};

export default HomeScreen;
