import React from 'react';
import { View } from 'react-native';
import { type BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import AppBarComponent from '../components/AppBarComponent/AppBarComponent';
import { type BottomTabParamList } from '../models';

type Props = BottomTabScreenProps<BottomTabParamList>;

const Home = ({ navigation, route }: Props): React.ReactNode => {
  return (
    <View>
      <AppBarComponent navigation={navigation} route={route} />
    </View>
  );
};

export default Home;
