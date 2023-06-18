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

const AuthHeader = ({
  title,
  onBackPress,
}: {
  title: string;
  onBackPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={20} onPress={onBackPress}>
        <Image
          style={styles.image}
          source={require('../../assets/arrow.png')}></Image>
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default React.memo(AuthHeader);
