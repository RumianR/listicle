import React, {useState} from 'react';
import {
  GestureResponderEvent,
  Image,
  NativeSyntheticEvent,
  Pressable,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';
import Input from '../Input';

type Props = {
  title: string;
  subtitle?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

const ListItem = (props: Props) => {
  return (
    <Pressable style={[styles.container, props.style]} onPress={props.onPress}>
      <View style={styles.content}>
        <Text style={styles.title}>{props.title}</Text>
        {props?.subtitle && (
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        )}
      </View>
      <Image
        style={styles.arrow}
        source={require('../../assets/forward_arrow.png')}
      />
    </Pressable>
  );
};

export default React.memo(ListItem);
