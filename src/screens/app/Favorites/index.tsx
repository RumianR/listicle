import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RootStackParamList from '../../../navigation';
import {ScreenNames} from '../../../utils/routes';
import {SafeAreaView} from 'react-native-safe-area-context';

type FavoritesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Favorites
>;

type Props = {
  navigation: FavoritesScreenNavigationProp;
};

const Favorites = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>Favorites</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;
