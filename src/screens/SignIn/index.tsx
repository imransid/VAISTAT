import React from 'react';
import { View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';

import { Logo } from '@/assets';
import { Checkbox, TextInput, TextItem } from '@/components';
import { colors } from '@/theme/colors';

import Styles from './Styles';
const SignIn: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setCheck] = React.useState(false);

  return (
    <Grid style={Styles.container}>
      <Row style={Styles.LogoRow}>
        <View style={Styles.Logo}>
          <Logo />
        </View>
      </Row>

      <Row style={Styles.input}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email"
          keyboardType="default"
        />
      </Row>

      <Row style={Styles.input}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          keyboardType="default"
          isPassword={true}
        />
      </Row>

      <Row style={Styles.input}>
        <Col>
          <Checkbox status={status} setCheck={setCheck} />
        </Col>
        <Col style={Styles.centerAll}>
          <TextItem txt={'Forgot Password?'} color={colors.primary} variant="bodyLarge" />
        </Col>
      </Row>
    </Grid>
  );
};

export default SignIn;
