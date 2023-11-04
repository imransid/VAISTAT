import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import Spinner from 'react-native-loading-spinner-overlay';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { type StackScreenProps } from '@react-navigation/stack';

import { FBIcon, Google, LockUser, Logo } from '@/assets';
import { Button, Checkbox, TextInput, TextItem } from '@/components';
import { type AuthStackParamList } from '@/models';
import { type RootState } from '@/store';
import { colors } from '@/theme/colors';

import ToastPopUp from '../../store/sagas/Toast.android';
import { getUserAction } from '../../store/slices/features/users/slice';

import Styles from './Styles';

type Props = StackScreenProps<AuthStackParamList>;

const SignIn: React.FC<Props> = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setCheck] = React.useState(false);
  const loader = useSelector((state: RootState) => state.users.user.isLoading);

  const showToast = (): void => {
    ToastPopUp('Email and Password is required.');
  };

  const goToPage = (routeName: string): void => {
    if (email === '' || password === '') {
      showToast();
      return;
    }

    const requestData = {
      email, // 'Akakany@gmail.com',
      password // '123456'
    };

    dispatch(getUserAction(requestData));
  };

  return (
    <Grid style={Styles.container}>
      <Spinner visible={loader} textContent={'Loading...'} />

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

      <Row style={Styles.smallBox}>
        <Col>
          <Checkbox status={status} setCheck={setCheck} />
        </Col>
        <Col style={Styles.centerAll}>
          <TextItem txt={'Forgot Password?'} color={colors.primary} variant="bodyLarge" />
        </Col>
      </Row>

      <Row style={[Styles.centerAll, Styles.smallBox]}>
        <Text variant="bodySmall" style={Styles.txtCenter}>
          By clicking this button, you are agreeing to all the{' '}
          <TextItem txt={'Terms and Conditions'} color={colors.primary} variant="bodySmall" /> of
          vaistat.
        </Text>
      </Row>

      <Row style={Styles.input}>
        {/* <TouchableOpacity onPress={()=> navigation.navigate('AppStack')}> */}
        <Button
          txt="Login"
          pressFunction={() => {
            goToPage('AppStack');
          }}
        />
        {/* </TouchableOpacity> */}
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
        <Col style={Styles.icon}>
          <LockUser />
        </Col>
        <Col></Col>
      </Row>

      <Row style={Styles.divider} />

      <Row style={Styles.buttonTxt}>
        <TextItem txt={"Don't have a account? "} color={colors.gray} variant="bodyMedium" />
      </Row>
      <Row style={Styles.buttonTxt}>
        <TouchableOpacity
          onPress={() => {
            goToPage('SignUp');
          }}>
          <TextItem txt={'Sign up here'} color={colors.primary} variant="bodyMedium" />
        </TouchableOpacity>
      </Row>

      <Row style={Styles.divider} />
      <Row style={Styles.divider} />
      <Row style={Styles.divider} />

      <Row style={Styles.buttonTxt}>
        <TouchableOpacity
          onPress={() => {
            goToPage('FAQ');
          }}>
          <TextItem txt={'FAQ'} color={colors.primary} variant="bodyLarge" />
        </TouchableOpacity>
      </Row>
    </Grid>
  );
};

export default SignIn;
