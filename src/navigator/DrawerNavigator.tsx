import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList, DrawerScreenProps, createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { BottomTabParamList, DrawerParamList, RootStackParamList } from '../models';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import BottomTabs from './BottomTabs';
import { Image } from 'react-native';
import { Drawer as PaperDrawer,Divider,Switch } from 'react-native-paper';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

const  Drawer = createDrawerNavigator<DrawerParamList>();


const CustomDrawerContent = (props:DrawerContentComponentProps)  => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  //const {navigation} = useNavigation<StackScreenProps<RootStackParamList>>()
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      
        <PaperDrawer.Item
          icon={({}) => {return <Image source={require('../assets/cross.png')}/>}}
          label="MENU"
          onPress={() => props.navigation.closeDrawer()}
        />
      <Divider />
      <PaperDrawer.Item
        icon={({}) => {return <Image source={require('../assets/car.png')}/>}}
        label="Status"
        onPress={() => {}}
        right={({ }) => {return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />}}
      />
      <PaperDrawer.Item
        icon={({}) => {return <Image source={require('./img/car.png')}/>}}
        label="Status"
        onPress={() => {}}
      />
      <PaperDrawer.Item
        icon={({}) => {return <Image source={require('./img/car.png')}/>}}
        label="Status"
        onPress={() => {}}
      />
      <PaperDrawer.Item
        icon={({}) => {return <Image source={require('./img/car.png')}/>}}
        label="Status"
        onPress={() => {}}
      />
      <PaperDrawer.Item
        icon={({}) => {return <Image source={require('./img/car.png')}/>}}
        label="Status"
        onPress={() => {}}
      />
      <Divider/>
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
    return(
      <Drawer.Navigator initialRouteName="BottomTabs" drawerContent={(props) => <CustomDrawerContent {...props}/>}>
        <Drawer.Screen name="BottomTabs" component={BottomTabs} options={{  headerShown: false }}/>
          <Drawer.Screen name="Profile" component={Profile} options={{  headerShown: false }}/>
          <Drawer.Screen name="Settings" component={Setting}  options={{  headerShown: false }}/>
      </Drawer.Navigator>
    )
  }

  export default DrawerNavigator