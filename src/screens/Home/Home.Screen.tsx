import React, { type FC } from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { type StackScreenProps } from '@react-navigation/stack';

import TopBar from '@/components/TopBar/TopBar';
import { type HomePageTopStackParamList } from '@/models';

import Styles from './Style';

type Props = StackScreenProps<HomePageTopStackParamList>;

const HomeScreen: FC<Props> = ({ navigation, route }: Props): React.ReactNode => {
  return (
    <View style={Styles.container}>
      <TopBar navigation={navigation} route={route} />
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={Styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }}></MapView>
    </View>
  );
};

export default HomeScreen;
