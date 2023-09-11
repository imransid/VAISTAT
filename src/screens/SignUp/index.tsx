import React from 'react';
import { ScrollView, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-paper';

import { FBIcon, Google } from '@/assets';
import { Button, TextInput, TextItem } from '@/components';
import { colors } from '@/theme/colors';

import Styles from './Styles';
const SignUp: React.FC = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  return (
    <Grid style={Styles.container}>
      <ScrollView>
        <Row style={Styles.LogoRow}>
          <TextItem txt="Account creation" color={colors.black} variant="titleMedium" />
        </Row>

        <Row style={Styles.input}>
          <Col>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
              keyboardType="default"
            />
          </Col>
          <Col style={Styles.extraSpace}></Col>
          <Col>
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
              keyboardType="default"
            />
          </Col>
        </Row>

        <Row style={Styles.input}>
          <TextInput
            value={userName}
            onChangeText={setUserName}
            placeholder="User Name"
            keyboardType="default"
            isPassword={false}
          />
        </Row>
        <Row style={Styles.input}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="default"
            isPassword={false}
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
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            keyboardType="default"
            isPassword={true}
          />
        </Row>

        <Row style={[Styles.centerAll, Styles.smallBox]}>
          <Text variant="bodySmall" style={Styles.txtCenter}>
            By clicking this button, you are agreeing to all the{' '}
            <TextItem txt={'Terms and Conditions'} color={colors.primary} variant="bodySmall" /> of
            vaistat.
          </Text>
        </Row>

        <Row style={Styles.input}>
          <Button txt="Login" />
        </Row>

        <Row style={Styles.iconBox}>
          <Col style={Styles.centerAll}>
            <View style={Styles.leanerLine}></View>
          </Col>
          <Col style={[Styles.centerAll, Styles.midText]}>
            <TextItem txt={'or login with'} color={colors.black} variant="bodyMedium" />
          </Col>
          <Col style={Styles.centerAll}>
            <View style={Styles.leanerLine}></View>
          </Col>
        </Row>

        <Row style={Styles.iconBox}>
          <Col></Col>
          <Col style={Styles.icon}>
            <FBIcon />
          </Col>
          <Col style={Styles.icon}>
            <Google />
          </Col>
          <Col></Col>
        </Row>

        <Row style={Styles.divider} />

        <Row style={Styles.buttonTxt}>
          <TextItem txt={'Already have a account? '} color={colors.gray} variant="bodyMedium" />
        </Row>
        <Row style={Styles.buttonTxt}>
          <TextItem txt={'Log in here'} color={colors.primary} variant="bodyMedium" />
        </Row>

        <Row style={Styles.divider} />
        <Row style={Styles.divider} />
        <Row style={Styles.divider} />

        <Row style={Styles.buttonTxt}>
          <TextItem txt={'FAQ'} color={colors.primary} variant="bodyLarge" />
        </Row>

        <Row style={Styles.divider} />
        <Row style={Styles.divider} />
        <Row style={Styles.divider} />
        <Row style={Styles.divider} />
      </ScrollView>
    </Grid>
  );
};

export default SignUp;
