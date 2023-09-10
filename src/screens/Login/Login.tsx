import React from 'react';
import { Button, Text, View } from 'react-native';
import { type StackScreenProps } from '@react-navigation/stack'; // Updated import

import { type RootStackParamList } from '../../models'; // Updated import

import Styles from './Styles';

type Props = StackScreenProps<RootStackParamList, 'Login'>;

const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text>Login</Text>
      <Button
        title="Go to Registration Screen"
        onPress={() => {
          navigation.navigate('Registration');
        }}
      />
      <Button
        title="Go to Home Screen"
        onPress={() => {
          navigation.navigate('Drawer');
        }}
      />
    </View>
  );
};

export default Login;
