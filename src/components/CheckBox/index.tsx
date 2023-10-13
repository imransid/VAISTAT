import React from 'react';
import { Col, Row } from 'react-native-easy-grid';
import { Checkbox } from 'react-native-paper';
import PropTypes from 'prop-types';

import { ETitleAlignment } from '@/app-enum';

import { colors } from '../../theme/colors';
import TextItem from '../TextItem';

import Styles from './Styles';

interface ICustomCheckBoxProps {
  status: boolean;
  setCheck: (text: boolean) => void;
  title?: string;
  textColSize?: number;
  checkBoxColSize?: number;
  titleAlignment?: string;
}

const CustomCheckBox: React.FC<ICustomCheckBoxProps> = ({
  status,
  setCheck,
  title = 'Remember me',
  textColSize = 10,
  checkBoxColSize = 2,
  titleAlignment = ETitleAlignment.LEFT
}) => {
  return (
    <Row>
      {titleAlignment === ETitleAlignment.LEFT && (
        <Col size={textColSize} style={Styles.title}>
          <TextItem txt={title} color={colors.black} />
        </Col>
      )}
      <Col size={checkBoxColSize} style={Styles.checkkboxInput}>
        <Checkbox
          status={status ? 'checked' : 'unchecked'}
          color={colors.gray}
          uncheckedColor={colors.gray}
          onPress={() => {
            setCheck(!status);
          }}
        />
      </Col>
      {titleAlignment === ETitleAlignment.RIGHT && (
        <Col size={textColSize} style={Styles.title}>
          <TextItem txt={title} color={colors.black} />
        </Col>
      )}
    </Row>
  );
};

CustomCheckBox.propTypes = {
  status: PropTypes.bool.isRequired,
  setCheck: PropTypes.func.isRequired
};

export default CustomCheckBox;
