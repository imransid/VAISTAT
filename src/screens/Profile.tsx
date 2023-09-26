import React from 'react';
import { Image, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { type DrawerScreenProps } from '@react-navigation/drawer';

import { type DrawerParamList } from '../models';

type Props = DrawerScreenProps<DrawerParamList>;

const Profile = ({ navigation }: Props): React.ReactNode => {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Action
          icon={() => {
            return <Image source={require('../assets/img/cross.png')} />;
          }}
          onPress={() => {
            navigation.navigate('BottomTabs');
          }}
        />
        <Appbar.Content title="Profile" />
      </Appbar.Header>
    </View>
  );
};

export default Profile;
