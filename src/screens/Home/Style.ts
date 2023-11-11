/* eslint-disable react-native/sort-styles */
import { StyleSheet } from 'react-native';

import { colors } from '@/theme/colors';
const Styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'flex-end',
    width: '100%'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  fabButton: {
    // borderWidth: 2,
    // borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    bottom: 60,
    justifyContent: 'center',

    position: 'absolute',

    width: 70,

    // right: 200,
    height: 70,
    backgroundColor: colors.orange,
    borderRadius: 100
    // shadowColor: "#000",
    //   shadowOffset: {
    //     width: 0,
    //     height: 4,
    //   },
    //   shadowOpacity: 0.32,
    //   shadowRadius: 5.46,

    //   elevation: 9,
  },
  fabIndecator: {
    alignItems: 'center',
    bottom: 60,
    justifyContent: 'center',

    position: 'absolute',

    width: 70,

    // right: 200,
    height: 70,
    borderRadius: 100
    // shadowColor: "#000",
    //   shadowOffset: {
    //     width: 0,
    //     height: 4,
    //   },
    //   shadowOpacity: 0.32,
    //   shadowRadius: 5.46,

    // elevation: 9,
  },
  card: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black
  },
  textColor: {
    color: colors.white
  }
});

export default Styles;
