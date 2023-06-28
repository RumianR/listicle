import React, {useState} from 'react';
import {Image, Linking, Pressable, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import RootStackParamList from '../../../navigation';
import {ScreenNames} from '../../../utils/routes';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp} from '@react-navigation/native';
import ImageCarousel from '../../../components/ImageCarousel';

type ProductDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.ProductDetails
>;

type ProductDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  ScreenNames.ProductDetails
>;

type Props = {
  navigation: ProductDetailScreenNavigationProp;
  route: ProductDetailScreenRouteProp;
};

const ProductDetails = ({navigation, route}: Props) => {
  const {product} = route?.params || {};

  const onBackPress = () => {
    navigation.goBack();
  };

  const onContact = () => {
    // Make a phone call
    const phone = '5147021770';
    Linking.openURL(`tel:${phone}`);
    // Send an email
    // const email = 'RashidN96@gmail.com';
    // Linking.openURL(`mailto:${email}`);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        <Pressable style={styles.backContainer} onPress={onBackPress}>
          <Image
            style={styles.backIcon}
            source={require('../../../assets/header/back.png')}
          />
        </Pressable>
        {product?.images?.length ? (
          <ImageCarousel images={product.images}></ImageCarousel>
        ) : (
          <Image style={styles.image} source={{uri: product?.image}} />
        )}
        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.bookmarkContainer}>
          <Image
            style={styles.bookmarkIcon}
            source={require('../../../assets/tabs/favorite.png')}
          />
        </Pressable>
        <View>
          <Button
            title="Contact Seller"
            style={styles.button}
            onPress={onContact}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetails);
