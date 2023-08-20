import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import AppBarComponent from '../components/AppBarComponent'
import { BottomTabParamList } from '../models'

type Props = BottomTabScreenProps<BottomTabParamList>

const UpcomingJob = ({navigation, route}: Props) => {
  return (
    <View>
      <AppBarComponent navigation={navigation} route={route}/>
    </View>
  )
}

export default UpcomingJob