import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const Styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingLeft: scale(16),
    paddingRight: scale(16)
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
    flex: 1
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
  }
});
export default Styles;
