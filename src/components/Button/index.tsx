import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { EButtonType } from '@/app-enum';

import { colors } from '../../theme/colors';
import { TextItem } from '..';

import Styles from './Styles';

interface ICustomTextInputProps {
  txt: string;
  type?: string;
}

const CustomButtonItem: React.FC<ICustomTextInputProps> = ({
  txt,
  type = EButtonType.GreenBtn
}) => (
  <TouchableOpacity style={type === EButtonType.GreenBtn ? Styles.buttonGreen : Styles.buttonWhite}>
    <TextItem txt={txt} color={type === EButtonType.GreenBtn ? colors.white : colors.black} />
  </TouchableOpacity>
);

export default CustomButtonItem;
