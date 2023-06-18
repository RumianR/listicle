import React, {useState} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signup = () => {
  const [checked, setChecked] = useState(false);

  const onSignIn = () => {
    console.log('Hello');
  };
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign Up" onBackPress={() => {}}></AuthHeader>
      <Input label="Name" placeholder="John Doe"></Input>
      <Input label="Email" placeholder="example@gmail.com"></Input>
      <Input label="Password" isPassword={true} placeholder="*********"></Input>
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
        <Text style={styles.agreeText}>
          I agree with <Text style={styles.agreeTextBold}>Terms</Text> &{' '}
          <Text style={styles.agreeTextBold}>Privacy</Text>
        </Text>
      </View>

      <Button style={styles.button} onPress={() => {}} title="Sign Up"></Button>
      <Seperator title="Or sign up with"></Seperator>
      <GoogleLogin></GoogleLogin>
      <Text style={styles.footerText}>
        Already have an account?
        <Text onPress={onSignIn} style={styles.footerLink}>
          {' '}
          Sign In
        </Text>
      </Text>
    </ScrollView>
  );
};

export default Signup;
