import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const Styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white
  },
  container: {
    backgroundColor: colors.white,
    paddingTop: verticalScale(16)
  },
  expandedContainer: {
    paddingTop: verticalScale(10),
    backgroundColor: colors.lightGray
  },
  centerAll: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtRow: {
    paddingLeft: scale(16),
    paddingRight: scale(16),
    fontSize: 16,
    width: '100%',
    height: verticalScale(20)
  },
  btnRow: {
    paddingLeft: scale(16),
    paddingRight: scale(16),
    fontSize: 16,
    width: '100%',
    height: verticalScale(50)
  },
  dividerShortStyle: {
    marginBottom: verticalScale(10),
    marginLeft: scale(10),
    marginRight: scale(10)
  },
  appBarActionStyle: {
    alignItems: 'flex-end',
    flex: 1,
    width: '100%',
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
    borderRadius: scale(5),
    paddingLeft: scale(4),
    paddingRight: scale(4),
    paddingBottom: verticalScale(2),
    paddingTop: verticalScale(2)
  },
  badgeStyleOrange: {
    backgroundColor: colors.orange,
    alignSelf: 'flex-start',
    height: verticalScale(16),
    borderRadius: scale(5),
    paddingLeft: scale(4),
    paddingRight: scale(4),
    paddingBottom: verticalScale(2),
    paddingTop: verticalScale(2)
  },
  badgeStyleGreen: {
    backgroundColor: colors.success,
    alignSelf: 'flex-start',
    height: verticalScale(16),
    borderRadius: scale(5),
    paddingLeft: scale(4),
    paddingRight: scale(4),
    paddingBottom: verticalScale(2),
    paddingTop: verticalScale(2)
  }
});
export default Styles;
