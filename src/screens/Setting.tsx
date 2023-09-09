import React from 'react';
import { Image, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { type DrawerScreenProps } from '@react-navigation/drawer';

import { type DrawerParamList } from '../models';

type Props = DrawerScreenProps<DrawerParamList>;

const Setting = ({ navigation }: Props): React.ReactNode => {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Action
          icon={() => {
            return <Image source={require('./img/back.png')} />;
          }}
          onPress={() => {
            navigation.navigate('BottomTabs');
          }}
        />
        <Appbar.Content title="Settings" />
      </Appbar.Header>
    </View>
  );
};

export default Setting;
