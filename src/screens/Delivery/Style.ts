import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const Styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingLeft: scale(16),
    paddingRight: scale(16),
    height: 700,
    paddingTop: verticalScale(16)
  },
  centerAll: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtRow: {
    fontSize: 16,
    width: '100%',
    height: verticalScale(20)
  },
  btnRow: {
    fontSize: 16,
    width: '100%',
    height: verticalScale(50)
  },
  appBarActionStyle: {
    alignItems: 'flex-end',
    flex: 1,
    // width:'100%',
    height: 200,
    padding: 30
  },
  divider: {
    height: verticalScale(7),
    width: '100%'
  },
  badgeStyle: {
    backgroundColor: colors.blue,
    alignSelf: 'flex-start',
    height: verticalScale(16),
    borderRadius: 5
  },
  badgeStyleOrange: {
    backgroundColor: colors.orange,
    alignSelf: 'flex-start',
    height: verticalScale(16),
    borderRadius: 5
  },
  badgeStyleGreen: {
    backgroundColor: colors.success,
    alignSelf: 'flex-start',
    height: verticalScale(16),
    borderRadius: 5
  },
  bottomSheet: {
    position: 'absolute',
    zIndex: 999999999999,
    right: 0,
    left: 0,
    bottom: 0,
    paddingLeft: scale(10),
    paddingRight: scale(10)
  },
  bottomSheetHeader: {
    marginBottom: verticalScale(32)
  }
});
export default Styles;
