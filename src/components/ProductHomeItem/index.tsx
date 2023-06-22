import React, {useState} from 'react';
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
import Input from '../Input';

type Props = {
  title: string;
  image: string;
  price: string;
  onPress: (event: GestureResponderEvent) => void;
};

const ProductHomeItem = (props: Props) => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Image style={styles.image} source={{uri: props.image}} />

      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.price}>{props.price}</Text>
    </Pressable>
  );
};

export default React.memo(ProductHomeItem);
