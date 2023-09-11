import * as React from 'react';
import { Text } from 'react-native-paper';

import { colors } from '../../theme/colors';

interface ICustomTextInputProps {
  txt: string;
  color?: string;
  variant?: string;
}

const CustomTextItem: React.FC<ICustomTextInputProps> = ({
  txt,
  color = colors.iconEye,
  variant = 'labelMedium'
}) => (
  <Text style={{ color }} variant={variant}>
    {txt}
  </Text>
);

export default CustomTextItem;
