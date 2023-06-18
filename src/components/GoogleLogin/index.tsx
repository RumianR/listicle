import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    // Somewhere in your code

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      const {code} = error as {code: string};

      if (code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('cancelled');
      } else if (code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('in progress');
      } else if (code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('not avaiable');
      } else {
        // some other error happened
        console.log(error);

      }
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={handleGoogleLogin}>
      <Image
        source={require('../../assets/google.png')}
        style={styles.image}></Image>
    </TouchableOpacity>
  );
};

export default React.memo(GoogleLogin);
