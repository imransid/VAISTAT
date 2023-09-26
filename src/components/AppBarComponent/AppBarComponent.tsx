import React, { type ReactElement } from 'react';
import { Image } from 'react-native';
import { Appbar, Badge } from 'react-native-paper';
import { type BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { DrawerActions } from '@react-navigation/native';

import { type BottomTabParamList } from '../../models';

import Styles from './Style';

type Props = BottomTabScreenProps<BottomTabParamList>;

const AppBarComponent = ({ navigation, route }: Props): ReactElement => {
  return (
    <Appbar.Header>
      <Appbar.Action
        icon={() => {
          return <Image source={require('../../assets/img/list.png')} />;
        }}
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer);
        }}
      />
      <Appbar.Action
        style={Styles.container}
        icon={() => {
          return <Badge style={Styles.bgColor}>ON</Badge>;
        }}
      />
      <Appbar.Content title={route.name} />
      <Appbar.Action
        icon={() => {
          return <Image source={require('../../assets/img/bell.png')} />;
        }}
      />
    </Appbar.Header>
  );
};

export default AppBarComponent;
