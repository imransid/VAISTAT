import React, { type FC, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { type StackScreenProps } from '@react-navigation/stack';

import { type DeliveryPageStackParamList } from '@/models';

import Styles from './Style';

type Props = StackScreenProps<DeliveryPageStackParamList>;
const DeliveryJobsScreen: FC<Props> = ({ navigation, route }: Props) => {
  useEffect(() => {
    navigation
      .getParent()
      ?.getParent()
      ?.setOptions({
        tabBarStyle: {
          display: 'none'
        },
        headerShown: false
      });
    return () => {
      navigation.getParent()?.getParent()?.setOptions({
        tabBarStyle: undefined,
        headerShown: true
      });
    };
  });
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Delivery Jobs" />
      </Appbar.Header>

      <View style={Styles.container}>
        {/* <TopBar navigation={navigation} route={route} /> */}
        <Text>DeliveryJobsScreen</Text>
      </View>
    </View>
  );
};

export default DeliveryJobsScreen;
