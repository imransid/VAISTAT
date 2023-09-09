import React from 'react';
import { Button, Text, View } from 'react-native';
import { type StackScreenProps } from '@react-navigation/stack';

import { type RootStackParamList } from '../../models';

import Styles from './Styles';

type Props = StackScreenProps<RootStackParamList, 'Login'>;

const Login = ({ navigation }: Props): React.ReactNode => {
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
