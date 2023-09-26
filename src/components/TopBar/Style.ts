import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

import { colors } from '@/theme/colors';

const Styles = ScaledSheet.create({
  container: {
    borderRadius: scale(14),
    position: 'absolute',
    top: verticalScale(10),
    left: scale(100),
    backgroundColor: colors.white,
    zIndex: 999999999999,
    width: scale(150),
    height: verticalScale(32),
    shadowOffset: {
      width: scale(-2),
      height: verticalScale(7)
    },
    shadowColor: colors.black,
    shadowOpacity: 0.2
  },
  active: {
    backgroundColor: colors.success
  },
  inActive: {
    backgroundColor: colors.white
  },
  borderStyle: {
    borderEndWidth: 1,
    borderColor: colors.gray
  },
  itemCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftColStyle: {
    borderTopLeftRadius: scale(14),
    borderBottomLeftRadius: scale(14)
    // backgroundColor: colors.success,
  },
  rightColStyle: {
    borderTopRightRadius: scale(14),
    borderBottomRightRadius: scale(14)
    // backgroundColor: colors.success,
  }
});

export default Styles;
