import { ScaledSheet, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const Styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white
  },
  LogoRow: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 35,
    height: 150,
    width: '100%'
  },
  Logo: {
    width: 158,
    height: 64
  },
  input: {
    padding: 10,
    height: verticalScale(70)
  },
  centerAll: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Styles;
