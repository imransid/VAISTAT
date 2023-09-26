import { scale, ScaledSheet } from 'react-native-size-matters';

import { colors } from '../theme/colors';

const Styles = ScaledSheet.create({
  bottomTabheaderTitle: {
    color: colors.success,
    fontSize: 16
  },
  bottomTabbgColor: {
    backgroundColor: colors.primary,
    marginLeft: scale(16),
    width: scale(32)
  },
  bottomTabcontainer: {
    flexDirection: 'row',
    marginLeft: scale(20)
  },
  bottomTabheaderRight: {
    marginRight: scale(20)
  }
});

export default Styles;
