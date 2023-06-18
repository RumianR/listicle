import React from 'react';
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';

const Button = ({
  title,
  onPress,
  style,
}: {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style: StyleProp<ViewStyle>;
}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.container, style]}
        onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Button);
