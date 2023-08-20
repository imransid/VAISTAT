import { View } from 'react-native'
import React from 'react'
import AppBarComponent from '../components/AppBarComponent'
import { BottomTabParamList } from '../models'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'


type Props = BottomTabScreenProps<BottomTabParamList>

const ActiveJob = ({navigation, route}: Props) => {
  return (
    <View>
      <AppBarComponent navigation={navigation} route={route}/>
    </View>
  )
}

export default ActiveJob