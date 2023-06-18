import React, {useState} from 'react';
import {
  GestureResponderEvent,
  Image,
  NativeSyntheticEvent,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';

const Input = ({
  label,
  placeholder,
  isPassword = false,
}: {
  label: string;
  placeholder: string;
  isPassword?: boolean;
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(currentValue => !currentValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholder={placeholder}
          style={styles.input}></TextInput>
        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image
              style={styles.eye}
              source={
                isPasswordVisible
                  ? require('../../assets/eye_closed.png')
                  : require('../../assets/eye.png')
              }></Image>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default React.memo(Input);
