import { Image, View} from 'react-native'
import { Appbar, Badge } from 'react-native-paper';
import React from 'react'
import { DrawerActions, } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomTabParamList} from '../models';

type Props = BottomTabScreenProps<BottomTabParamList>

const AppBarComponent = ({navigation, route }:Props) => {
  return (
    <Appbar.Header>
          
        <Appbar.Action 
            icon={({ }) => {
              return <Image source={require('./img/list.png')}/>
            }}
           onPress={() => navigation.dispatch(DrawerActions.openDrawer)}
        />
        <Appbar.Action 
            style={{backgroundColor: '#4CAF50', borderRadius: 64, height: 20, width: 32}}
            icon={({ }) => {
              return <Badge style={{ backgroundColor: '#4CAF50'}}>ON</Badge>
            }}
           onPress={() => {}}
        />
        <Appbar.Content title={route.name} />
        <Appbar.Action 
            icon={({ }) => {
                return <Image source={require('./img/bell.png')}/>
            }}
            onPress={() => {}} 
        />
    </Appbar.Header>
  )
}

export default AppBarComponent