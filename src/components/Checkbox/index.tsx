import React from 'react';
import {
  GestureResponderEvent,
  Image,
  NativeSyntheticEvent,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';

const Checkbox = ({
  checked,
  onCheck,
}: {
  checked: boolean;
  onCheck: (event: boolean) => void;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={() => onCheck(!checked)}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.checkIcon}
            source={require('../../assets/check.png')}></Image>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default React.memo(Checkbox);
