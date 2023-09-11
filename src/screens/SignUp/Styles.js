import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const Styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white
  },
  LogoRow: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    height: verticalScale(35),
    width: '100%'
  },
  Logo: {
    width: 158,
    height: 64
  },
  input: {
    padding: 15,
    height: verticalScale(70)
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
  },
  extraSpace: {
    width: 8
  }
});

export default Styles;
