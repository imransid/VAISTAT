import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

const Styles = ScaledSheet.create({
  checkkboxInput: {
    border: 1,
    marginTop: verticalScale(4),
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  title: {
    marginTop: verticalScale(4),
    marginLeft: scale(32),
    alignItems: 'flex-start'
  }
});

export default Styles;
