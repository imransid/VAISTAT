import React, { useState } from 'react';
import { Grid, Row } from 'react-native-easy-grid';
import PhoneInput from 'react-native-phone-number-input';
import { type StackScreenProps } from '@react-navigation/stack';

import { Button, TextItem } from '@/components';
import { type AuthStackParamList } from '@/models';
import { colors } from '@/theme/colors';

import Styles from './Styles';

type Props = StackScreenProps<AuthStackParamList>;
const PhoneVerification: React.FC<Props> = ({ navigation }: Props) => {
  const [phoneInserted] = useState(false);
  const [phone, setphone] = useState('');

  const goToPage = (routeName: string): void => {
    navigation.navigate(routeName);
  };

  return (
    <Grid style={Styles.container}>
      <Row style={[Styles.input, Styles.centerAll]}>
        <TextItem
          txt={'Phone Verification'}
          color={colors.darkGray}
          variant="titleMedium"
          fontWeight="bold"
        />
      </Row>
      <Row style={Styles.input}>
        <PhoneInput
          containerStyle={Styles.PhoneInput}
          defaultCode="BD"
          layout="first"
          disabled={phoneInserted}
          value={phone}
          onChangeFormattedText={phone => {
            setphone(phone);
          }}
          withDarkTheme
          withShadow
          autoFocus
        />
      </Row>
      <Row></Row>

      <Row style={Styles.input}>
        <Button
          txt="Next"
          pressFunction={() => {
            goToPage('OTPVerification');
          }}
        />
      </Row>
    </Grid>
  );
};

export default PhoneVerification;
