import React, { type FC } from 'react';
import { View } from 'react-native';
import { type StackScreenProps } from '@react-navigation/stack';

import TopBar from '@/components/TopBar/TopBar';
import { type HomePageTopStackParamList } from '@/models';

type Props = StackScreenProps<HomePageTopStackParamList>;

const HomeScreen: FC<Props> = ({ navigation, route }: Props): React.ReactNode => {
  return (
    <View>
      <TopBar navigation={navigation} route={route} />
    </View>
  );
};

export default HomeScreen;
