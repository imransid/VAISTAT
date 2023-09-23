import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const Styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: scale(15)
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  input: {
    // padding: 15,
    height: verticalScale(70)
  },
  inputX: {
    flexDirection: 'column'
  },
  centerAll: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: scale(10),
    marginBottom: verticalScale(15)
  },
  Submit: {
    paddingHorizontal: scale(10),
    marginBottom: verticalScale(15)
  },
  fixed40: {
    width: scale(40)
  },
  divider: {
    height: 1, // Set the height of the divider
    width: 10, // Set the width of the divider
    backgroundColor: colors.darkGray, // Set the color of the divider
    marginHorizontal: 10 // Adjust the spacing as needed
  }
});

export default Styles;
