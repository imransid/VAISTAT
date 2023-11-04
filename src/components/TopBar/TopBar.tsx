import React, { type FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { type StackScreenProps } from '@react-navigation/stack';

import { MapTrifold, MapTrifoldBlack } from '@/assets';
import { type HomePageTopStackParamList } from '@/models';
import { Routes } from '@/navigators/ROUTES';

import Styles from './Style';

type Props = StackScreenProps<HomePageTopStackParamList>;
const TopBar: FC<Props> = ({ navigation, route }: Props) => {
  const handleActive = (routerName: string): void => {
    switch (routerName) {
      case Routes.HOME:
        navigation.navigate(Routes.HOME);
        break;
      case Routes.DELIVERYSTACKSCREEN:
        navigation.navigate(Routes.DELIVERYSTACKSCREEN);
        break;
      case Routes.URGENTDELIVERY:
        navigation.navigate(Routes.URGENTDELIVERY);
        break;
      default:
        navigation.navigate(Routes.HOME);
    }
  };
  return (
    <View style={Styles.container}>
      <Grid>
        <Row>
          <Col>
            <View
              style={[
                Styles.borderStyle,
                Styles.itemCenter,
                Styles.leftColStyle,
                route.name === Routes.HOME ? Styles.active : Styles.inActive
              ]}>
              <TouchableOpacity
                onPress={() => {
                  handleActive(Routes.HOME);
                }}>
                {route.name === Routes.HOME ? <MapTrifold /> : <MapTrifoldBlack />}
              </TouchableOpacity>
            </View>
          </Col>
          <Col>
            <View
              style={[
                Styles.borderStyle,
                Styles.itemCenter,
                route.name === Routes.DELIVERY ? Styles.active : Styles.inActive
              ]}>
              <TouchableOpacity
                onPress={() => {
                  handleActive(Routes.DELIVERYSTACKSCREEN);
                }}>
                {route.name === Routes.DELIVERY ? (
                  <Image source={require('../../assets/img/ListBullets.png')} />
                ) : (
                  <Image source={require('../../assets/img/ListBullets-black.png')} />
                )}
              </TouchableOpacity>
            </View>
          </Col>
          <Col>
            <View
              style={[
                Styles.rightColStyle,
                Styles.itemCenter,
                route.name === Routes.URGENTDELIVERY ? Styles.active : Styles.inActive
              ]}>
              <TouchableOpacity
                onPress={() => {
                  handleActive(Routes.URGENTDELIVERY);
                }}>
                <Image source={require('../../assets/img/Siren.png')} />
              </TouchableOpacity>
            </View>
          </Col>
        </Row>
      </Grid>
    </View>
  );
};

export default TopBar;
