import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

const Styles = ScaledSheet.create({
  checkkboxInput: {
    marginTop: verticalScale(4),
    justifyContent: 'center',
    alignItems: 'left'
  },
  title: {
    marginTop: verticalScale(4),
    marginLeft: scale(32),
    alignItems: 'left'
  }
});

export default Styles;
