import React from 'react';
import { Image, Text, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Appbar } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';
import { type DrawerScreenProps } from '@react-navigation/drawer';

import { LeftArrow } from '@/assets';
import { colors } from '@/theme/colors';

import { type DrawerParamList } from '../models';

type Props = DrawerScreenProps<DrawerParamList>;

const Setting = ({ navigation }: Props): React.ReactNode => {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Action
          icon={() => {
            return <Image source={require('../assets/img/back.png')} />;
          }}
          onPress={() => {
            navigation.navigate('BottomTabs');
          }}
        />
        <Appbar.Content title="Settings" />
      </Appbar.Header>
      <Grid style={Styles.container}>
        <Row style={Styles.row}>
          <Col size={1}>
            <LeftArrow />
          </Col>
          <Col size={11}>
            <Text style={Styles.txt}>Log Out</Text>
          </Col>
        </Row>
      </Grid>
    </View>
  );
};

export default Setting;

const Styles = ScaledSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 20
  },
  row: {
    height: 60
  },
  txt: {
    color: colors.failure,
    fontSize: 16
  }
});
