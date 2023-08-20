import { View } from 'react-native'
import React from 'react'
import { BottomTabParamList } from '../models';
import AppBarComponent from '../components/AppBarComponent';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type Props =  BottomTabScreenProps<BottomTabParamList>

const Home = ({ navigation,route }: Props) => {
  return (
    <View>
        <AppBarComponent navigation={navigation} route={route}/>
    </View>
    
  )
}

export default Home