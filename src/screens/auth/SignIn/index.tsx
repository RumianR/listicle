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

type SignInScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.SignIn
>;

type Props = {
  navigation: SignInScreenNavigationProp;
};

const SignIn = ({navigation}: Props) => {
  const onSignup = () => {
    navigation.navigate(ScreenNames.SignUp);
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader title="Sign In" onBackPress={onBack}></AuthHeader>
        <Input label="Email" placeholder="example@gmail.com"></Input>
        <Input
          label="Password"
          isPassword={true}
          placeholder="*********"></Input>

        <Button
          style={styles.button}
          onPress={() => {}}
          title="Sign In"></Button>
        <Seperator title="Or sign in with"></Seperator>
        <GoogleLogin></GoogleLogin>
        <Text style={styles.footerText}>
          Don't have an account?
          <Text onPress={onSignup} style={styles.footerLink}>
            {' '}
            Sign Up
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
