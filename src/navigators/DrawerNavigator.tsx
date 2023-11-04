import React, { type FC, useState } from 'react';
import { Image } from 'react-native';
import { Divider, Drawer as PaperDrawer, Switch } from 'react-native-paper';
import {
  createDrawerNavigator,
  type DrawerContentComponentProps,
  DrawerContentScrollView
} from '@react-navigation/drawer';

import { TextItem } from '@/components';
import { ScanBarcode } from '@/screens';

import { type DrawerParamList } from '../models';
// import Profile from '../screens/Profile';
import Setting from '../screens/Setting';

import BottomTabNavigator from './BottomTabNavigator';
import { Routes } from './ROUTES';

const Drawer = createDrawerNavigator<DrawerParamList>();

const CustomDrawerContent: FC<DrawerContentComponentProps> = (
  props: DrawerContentComponentProps
) => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

  const onToggleSwitch = (): void => {
    setIsSwitchOn(!isSwitchOn);
  };

  // const {navigation} = useNavigation<StackScreenProps<RootStackParamList>>()

  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}

      <PaperDrawer.Item
        icon={() => {
          return <Image source={require('../assets/cross.png')} />;
        }}
        label="MENU"
        onPress={(): void => {
          props.navigation.closeDrawer();
        }}
      />
      <Divider />
      <PaperDrawer.Item
        icon={() => {
          return <Image source={require('../assets/car.png')} />;
        }}
        label="Status"
        right={() => {
          return (
            <>
              <TextItem txt={isSwitchOn ? 'Online' : 'Offline'} />
              <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            </>
          );
        }}
      />
      <PaperDrawer.Item
        icon={() => {
          return <Image source={require('../assets/img/path.png')} />;
        }}
        label="Optimize route"
      />
      <PaperDrawer.Item
        icon={() => {
          return <Image source={require('../assets/img/qrCode.png')} />;
        }}
        label="Scan QR Code"
      />
      <PaperDrawer.Item
        icon={() => {
          return <Image source={require('../assets/img/barcode.png')} />;
        }}
        label="Show barcode"
        onPress={() => {
          props.navigation.navigate(Routes.BARCODE);
        }}
      />

      <Divider />
      <PaperDrawer.Item
        icon={() => {
          return <Image source={require('../assets/img/user.png')} />;
        }}
        label="Profile"
        onPress={() => {
          //  props.navigation.navigate(Routes.PROFILE);
        }}
      />
      <PaperDrawer.Item
        icon={() => {
          return <Image source={require('../assets/img/gearSix.png')} />;
        }}
        label="Settings"
        onPress={() => {
          props.navigation.navigate(Routes.SETTINGS);
        }}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="BottomTabs"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="BottomTabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      {/* <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} /> */}
      <Drawer.Screen name="Settings" component={Setting} options={{ headerShown: false }} />
      <Drawer.Screen name="Barcode" component={ScanBarcode} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
