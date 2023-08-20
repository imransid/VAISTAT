import { View, Image } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { DrawerParamList } from '../models'
import { DrawerActions } from '@react-navigation/native'

type Props =  DrawerScreenProps<DrawerParamList>

const Setting = ({navigation}: Props) => {
  return (
    <View>
       <Appbar.Header>
        <Appbar.Action icon={({}) => { return <Image source={require('./img/back.png')}/>}} onPress={() => navigation.navigate('BottomTabs')} />
        <Appbar.Content title="Settings" />
      </Appbar.Header>
    </View>
  )
}

export default Setting