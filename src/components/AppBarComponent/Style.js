import { StyleSheet } from 'react-native';

import { colors } from '../../theme/colors';

const Styles = StyleSheet.create({
  bgColor: {
    backgroundColor: colors.primary
  },
  container: {
    backgroundColor: colors.primary,
    borderRadius: 64,
    height: 20,
    width: 32
  }
});

export default Styles;
