import { ScaledSheet, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const Styles = ScaledSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.buttonBg,
    borderRadius: verticalScale(24),
    height: verticalScale(45)
  }
});

export default Styles;
