import { View, Image } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { DrawerParamList } from '../models'

type Props =  DrawerScreenProps<DrawerParamList>

const Profile = ({navigation}: Props) => {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon={({}) => { return <Image source={require('./img/cross.png')}/>}} onPress={() => navigation.navigate('BottomTabs')} />
        <Appbar.Content title="Profile" />
      </Appbar.Header>
    </View>
  )
}

export default Profile