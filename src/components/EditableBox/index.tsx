import React, {useState} from 'react';
import {
  GestureResponderEvent,
  Image,
  NativeSyntheticEvent,
  Pressable,
  StyleProp,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';
import Input from '../Input';

type Props = {
  label?: string;
  value?: string;
  editable?: boolean;
  onChangeText?: (string: string) => void;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

const EditableBox = (props: Props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
        editable={props.editable}
      />
    </View>
  );
};

export default React.memo(EditableBox);
