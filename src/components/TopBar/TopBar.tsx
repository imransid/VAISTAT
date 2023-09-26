import React, { type FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { type StackScreenProps } from '@react-navigation/stack';

import { type HomePageTopStackParamList } from '@/models';
import { Routes } from '@/navigators/ROUTES';

import Styles from './Style';

type Props = StackScreenProps<HomePageTopStackParamList>;
const TopBar: FC<Props> = ({ navigation, route }: Props) => {
  // const [activeIndex, setActiveIndex] = useState(1);
  const handleActive = (routerName: string): void => {
    switch (routerName) {
      case Routes.HOME:
        navigation.navigate(Routes.HOME);
        break;
      case Routes.DELIVERY:
        navigation.navigate(Routes.DELIVERY);
        break;
      case Routes.URGENTDELIVERY:
        navigation.navigate(Routes.URGENTDELIVERY);
        break;
      default:
        navigation.navigate(Routes.URGENTDELIVERY);
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
                {route.name === Routes.HOME ? (
                  <Image source={require('../../assets/img/MapTrifold.png')} />
                ) : (
                  <Image source={require('../../assets/img/MapTrifold-black.png')} />
                )}
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
                  handleActive(Routes.DELIVERY);
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
