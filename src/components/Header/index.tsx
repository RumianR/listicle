import React, {Dispatch, SetStateAction, useState} from 'react';
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
  back?: {
    onPress: (event: GestureResponderEvent) => void;
  };
  showSearch?: boolean;
  keyword?: string;
  onSearch?: ((text: string) => void) | undefined;
  logout?: {
    onPress: (event: GestureResponderEvent) => void;
  };
  style?: StyleProp<ViewStyle>;
};

const Header = (props: Props) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const onSearchClick = () => {
    setShowSearchInput(existingValue => !existingValue);
  };
  return (
    <View>
      <View style={styles.container}>
        {props.back ? (
          <Pressable hitSlop={20} onPress={props.back?.onPress}>
            <Image
              style={styles.icon}
              source={require('../../assets/header/back.png')}></Image>
          </Pressable>
        ) : props.showSearch ? (
          <Pressable hitSlop={20} onPress={onSearchClick}>
            <Image
              style={styles.icon}
              source={require('../../assets/header/search.png')}></Image>
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}

        <Text style={styles.title}>{props.title}</Text>

        {props.logout ? (
          <Pressable hitSlop={20} onPress={props.logout?.onPress}>
            <Image
              style={styles.icon}
              source={require('../../assets/header/logout.png')}></Image>
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
      </View>
      {showSearchInput ? (
        <Input
          label=""
          onChangeText={props.onSearch}
          value={props.keyword}
          placeholder="Type your keyword..."></Input>
      ) : null}
    </View>
  );
};

export default React.memo(Header);
