import React, { useState } from 'react';
import { Grid, Row } from 'react-native-easy-grid';
import PhoneInput from 'react-native-phone-number-input';

import { Button, TextItem } from '@/components';
import { colors } from '@/theme/colors';

import Styles from './Styles';
const PhoneVerification: React.FC = () => {
  const [phoneInserted] = useState(false);
  // setPhoneInserted
  const [phone, setphone] = useState('');

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
        <Button txt="Login" />
      </Row>
    </Grid>
  );
};

export default PhoneVerification;
