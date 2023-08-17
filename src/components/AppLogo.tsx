import { View, Text, Image } from 'react-native'
import React from 'react'

const AppLogo = () => {
  return (
    <View>
     <Image source={require('./img/logo.png')} />
    </View>
  )
}

export default AppLogo