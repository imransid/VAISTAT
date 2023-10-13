import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';
const Styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    height: verticalScale(500)
  },
  contentCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  childContent: {
    marginLeft: scale(10),
    marginRight: scale(10),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10)
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
  }
});

export default Styles;
