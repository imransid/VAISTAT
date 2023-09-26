import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import { type StackScreenProps } from '@react-navigation/stack';

import TopBar from '@/components/TopBar/TopBar';
import { type HomePageTopStackParamList } from '@/models';

import Styles from './Style';

type Props = StackScreenProps<HomePageTopStackParamList>;
const UrgentDeliveryScreen: FC<Props> = ({ navigation, route }: Props) => {
  return (
    <View style={Styles.container}>
      <TopBar navigation={navigation} route={route} />
      <Text>UrgentDeliveryScreen</Text>
    </View>
  );
};

export default UrgentDeliveryScreen;
