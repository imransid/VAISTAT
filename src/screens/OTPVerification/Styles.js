import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const Styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: scale(15)
  },
  OTP: { width: '100%', height: 200 },

  input: {
    // padding: 15,
    height: verticalScale(70)
  },
  centerAll: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  PhoneInput: {
    width: '100%'
  },

  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6'
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6'
  }
});

export default Styles;
