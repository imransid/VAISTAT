import React from 'react';
import { Grid, Row } from 'react-native-easy-grid';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import { Button, TextItem } from '@/components';
import { colors } from '@/theme/colors';

import Styles from './Styles';
const OTPVerification: React.FC = () => {
  // const [phoneInserted, setPhoneInserted] = useState(false);
  // const [phone, setphone] = useState('');

  // const { hash, otp, message, timeoutError, stopListener, startListener } = useOtpVerify({ numberOfDigits: 4 });

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
      <Row style={[Styles.input, Styles.centerAll]}>
        <OTPInputView
          // style={Styles.OTP}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          // onCodeFilled={(code) => {
          //    // console.log(`Code is ${code}, you are good to go!`)
          // }}
        />
      </Row>
      <Row></Row>

      <Row style={Styles.input}>
        <Button txt="Login" />
      </Row>
    </Grid>
  );
};

export default OTPVerification;
