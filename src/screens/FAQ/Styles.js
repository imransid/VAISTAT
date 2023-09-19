import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const Styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white
  },
  LogoRow: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: verticalScale(10),
    height: verticalScale(120),
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: colors.extraLightGray
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
  jUSTIFYcenter: {
    justifyContent: 'center'
  },
  smallBox: {
    paddingLeft: 15,
    paddingRight: 15,
    height: verticalScale(50)
  },
  FirstRow: {
    width: '100%',
    height: verticalScale(50),
    paddingLeft: scale(20)
  },
  midTextCol: {
    width: '80%'
  },
  listText1: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.lightGray,
    height: verticalScale(200),
    borderBottomWidth: 2,
    borderBottomColor: colors.extraLightGray
    // minHeight: 30
  },
  listText2: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.lightGray,
    // minHeight: verticalScale(30),
    borderBottomWidth: 2,
    borderBottomColor: colors.extraLightGray,
    // minHeight: 30
    height: verticalScale(110)
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

  midBoxList: {
    width: '100%',
    paddingLeft: scale(20)
  },

  space: {
    width: '100%',
    height: verticalScale(15)
  }
});

export default Styles;
