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

const FavoriteItem = (props: Props) => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Image style={styles.image} source={{uri: props.image}} />

      <View style={styles.content}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>{props.price}</Text>
      </View>

      <Image source={require('../../assets/remove.png')} style={styles.icon} />
    </Pressable>
  );
};

export default React.memo(FavoriteItem);
