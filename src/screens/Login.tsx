import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../navigator';

  
type Props = StackScreenProps<RootStackParamList,'Login'>

const Login = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Button
        title="Go to Registration Screen"
        onPress={() => navigation.navigate("Registration")}
      />
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("Home")} 
      />
    </View>
  )
}

export default Login