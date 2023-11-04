import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const Styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingLeft: '10@s'
  },
  LogoRow: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 35,
    height: verticalScale(50),
    width: '100%'
  },
  HeaderRow: {
    alignItems: 'center',
    height: verticalScale(50),
    width: '100%'
  },
  Logo: {
    width: 158,
    height: 64
  },
  input: {
    paddingLeft: '10@s',
    height: verticalScale(50)
  },
  centerAll: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallBox: {
    paddingLeft: 15,
    paddingRight: 15,
    height: verticalScale(50)
  },
  leanerLine: {
    width: '100%',
    height: 1,
    backgroundColor: colors.black
  },
  midText: {
    width: scale(90)
  },
  icon: {
    width: scale(50),
    height: verticalScale(50)
  },
  iconBox: {
    paddingLeft: 15,
    paddingRight: 15,
    height: verticalScale(52)
  },
  buttonTxt: {
    height: verticalScale(18),
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtCenter: {
    textAlign: 'center'
  },

  divider: {
    height: verticalScale(7),
    width: '100%'
  }
});

export default Styles;
