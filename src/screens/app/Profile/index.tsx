import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
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
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Profile
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Profile = ({navigation}: Props) => {
  const num = 10;
  const onLogout = () => {};
  const onSettingsPress = () => {
    navigation.navigate(ScreenNames.Settings);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Profile'} logout={{onPress: onLogout}} />
      <View style={styles.content}>
        <Text style={styles.name}>Naimur Rashid</Text>
        <Text style={styles.email}>RashidN96@gmail.com</Text>
        <ListItem title="My Listings" subtitle={`You have ${num} listings`} />
        <ListItem
          title="Settings"
          subtitle={`Account, FAQ, Contact`}
          onPress={onSettingsPress}
        />
      </View>
      <Button title="Add New Listing" onPress={() => {}} />
    </SafeAreaView>
  );
};

export default React.memo(Profile);
