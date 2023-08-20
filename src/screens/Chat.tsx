import { View } from 'react-native'
import React from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { BottomTabParamList } from '../models'
import AppBarComponent from '../components/AppBarComponent'

type Props = BottomTabScreenProps<BottomTabParamList>

const Chat = ({navigation, route}:Props) => {
  return (
    <View>
      <AppBarComponent navigation={navigation} route={route}/>
    </View>
  )
}

export default Chat