import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

import Styles from './Styles';

interface ICustomTextInputProps {
  isPassword?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad';
}

const CustomTextInput: React.FC<ICustomTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  isPassword = false
}) => {
  // const [showPassword, setShowPassword] = useState(false);
  // const togglePasswordVisibility = () => {
  //     setShowPassword(!showPassword);
  // };

  return (
    <>
      <TextInput
        style={Styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        // secureTextEntry={!showPassword}
        keyboardType={keyboardType}
      />
      {/* {
                isPassword && <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Icon
                        name={showPassword ? "eye" : "eyeo"}
                        size={30}
                        color={colors.iconEye}
                        style={Styles.icon}
                    />
                </TouchableOpacity>
            } */}
    </>
  );
};

CustomTextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default CustomTextInput;
