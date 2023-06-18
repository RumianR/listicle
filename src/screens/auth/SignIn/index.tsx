import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const SignIn = () => {
  const onSignUp = () => {
    console.log('Hello');
  };
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign In" onBackPress={() => {}}></AuthHeader>
      <Input label="Email" placeholder="example@gmail.com"></Input>
      <Input label="Password" isPassword={true} placeholder="*********"></Input>

      <Button style={styles.button} onPress={() => {}} title="Sign In"></Button>
      <Seperator title="Or sign in with"></Seperator>
      <GoogleLogin></GoogleLogin>
      <Text style={styles.footerText}>
        Don't have an account?
        <Text onPress={onSignUp} style={styles.footerLink}>
          {' '}
          Sign Up
        </Text>
      </Text>
    </ScrollView>
  );
};

export default SignIn;
