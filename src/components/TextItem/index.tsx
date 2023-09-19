import * as React from 'react';
import { Text } from 'react-native-paper';

import { colors } from '../../theme/colors';

interface ICustomTextInputProps {
  txt: string;
  color?: string;
  variant?: string;
  fontWeight?: 'normal' | 'bold';
}

const CustomTextItem: React.FC<ICustomTextInputProps> = ({
  txt,
  color = colors.iconEye,
  variant = 'labelMedium',
  fontWeight
}) => (
  <Text style={{ color, fontWeight }} variant={variant}>
    {txt}
  </Text>
);

export default CustomTextItem;
