import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const Styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: scale(15)
  },

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
  }
});

export default Styles;
