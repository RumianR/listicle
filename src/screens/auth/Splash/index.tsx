import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';
import RootStackParamList from '../../../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ScreenNames} from '../../../utils/routes';
import {SafeAreaView} from 'react-native-safe-area-context';

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Splash
>;

type Props = {
  navigation: SplashScreenNavigationProp;
};

const Splash = ({navigation}: Props) => {
  const onSignup = () => {
    navigation.navigate(ScreenNames.SignUp);
  };
  const onSignin = () => {
    navigation.navigate(ScreenNames.SignIn);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../../assets/splash_image.png')}
        style={styles.image}
        resizeMode="contain"></Image>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find </Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}> Here!</Text>
      </View>

      <Button title="Sign Up" onPress={onSignup}></Button>
      <Pressable hitSlop={20}>
        <Text onPress={onSignin} style={styles.footerText}>
          Sign In
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default React.memo(Splash);
