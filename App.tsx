import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import Signup from './src/screens/auth/Signup';
import SignIn from './src/screens/auth/SignIn';

function App(): JSX.Element {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: Config.REACT_APP_GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access),
      iosClientId: Config.REACT_APP_GOOGLE_IOS_CLIENT_ID,
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);
  return (
    <SafeAreaView>
      <SignIn></SignIn>
    </SafeAreaView>
  );
}

export default App;
