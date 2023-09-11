import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { colors } from '../../theme/colors';
import { TextItem } from '..';

import Styles from './Styles';

interface ICustomTextInputProps {
  txt: string;
}

const CustomButtonItem: React.FC<ICustomTextInputProps> = ({ txt }) => (
  <TouchableOpacity style={Styles.button}>
    <TextItem txt={txt} color={colors.white} />
  </TouchableOpacity>
);

export default CustomButtonItem;
