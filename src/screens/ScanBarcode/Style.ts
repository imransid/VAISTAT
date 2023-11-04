import { ScaledSheet, verticalScale } from 'react-native-size-matters';

const Styles = ScaledSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center'
  },
  cameraStyle: {
    height: verticalScale(550)
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginTop: 16
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    minWidth: 250
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center'
  },
  textLinkStyle: {
    color: 'blue',
    paddingVertical: 20
  }
});

export default Styles;
