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
import {colors} from '../../utils/colors';

type Props = {
  title: string;
  image: string;
  isSelected: boolean;
  onPress: (event: GestureResponderEvent) => void;
};

const CategoryBox = (props: Props) => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <View
        style={[
          styles.imageContainer,
          props.isSelected ? {backgroundColor: colors.black} : {},
        ]}>
        <Image style={styles.image} source={{uri: props.image}} />
      </View>
      <Text
        style={[
          styles.title,
          props.isSelected ? {color: colors.blue, fontWeight: '500'} : {},
        ]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

export default React.memo(CategoryBox);
