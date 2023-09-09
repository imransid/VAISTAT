import React from 'react';
import { Image } from 'react-native';
import { Divider, Drawer as PaperDrawer } from 'react-native-paper';
import {
  createDrawerNavigator,
  type DrawerContentComponentProps,
  DrawerContentScrollView
} from '@react-navigation/drawer';

import { type DrawerParamList } from '../models';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';

import BottomTabs from './BottomTabs';

const Drawer = createDrawerNavigator<DrawerParamList>();

const CustomDrawerContent = (props: DrawerContentComponentProps): React.ReactNode => {
  // const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  // const onToggleSwitch = () => {
  //   setIsSwitchOn(!isSwitchOn);
  // };
  return (
    <DrawerContentScrollView {...props}>
      <PaperDrawer.Item
        icon={() => <Image source={require('../assets/cross.png')} />}
        label="MENU"
        onPress={() => {
          props.navigation.closeDrawer();
        }}
      />
      <Divider />
      {/* <PaperDrawer.Item
        icon={() => <Image source={require('../assets/car.png')} />}
        label="Status"
        right={props => {
          return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
        }}
      /> */}
      <PaperDrawer.Item
        icon={() => {
          return <Image source={require('./img/car.png')} />;
        }}
        label="Status"
        // onPress={() => { }}
      />
      <PaperDrawer.Item
        icon={() => {
          return <Image source={require('./img/car.png')} />;
        }}
        label="Status"
        // onPress={() => { }}
      />
      <PaperDrawer.Item
        icon={() => {
          return <Image source={require('./img/car.png')} />;
        }}
        label="Status"
        // onPress={() => { }}
      />
      <PaperDrawer.Item
        icon={() => {
          return <Image source={require('./img/car.png')} />;
        }}
        label="Status"
        // onPress={() => { }}
      />
      <Divider />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = (): React.ReactNode => {
  return (
    <Drawer.Navigator
      initialRouteName="BottomTabs"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
      <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Drawer.Screen name="Settings" component={Setting} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
