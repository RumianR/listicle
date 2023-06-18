import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/splash_image.png')}
        style={styles.image}
        resizeMode="contain"></Image>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find </Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}> Here!</Text>
      </View>

      <Button
        title="Sign Up"
        onPress={() => {
          console.log('button clicked');
        }}></Button>
      <Pressable hitSlop={20}>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
