import React, {useState} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
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
import {Product, products} from '../../../data/products';
import ProductHomeItem from '../../../components/ProductHomeItem';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';

type FavoritesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Favorites
>;

type Props = {
  navigation: FavoritesScreenNavigationProp;
};

const Favorites = ({navigation}: Props) => {
  const onProductPress = (product: Product) => {
    navigation.navigate(ScreenNames.ProductDetails, {product: product});
  };

  const renderItem = ({item, index}: {item: Product; index: number}) => {
    return (
      <FavoriteItem
        {...item}
        onPress={() => onProductPress(item)}></FavoriteItem>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Favorites" />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item: Product) => item.id.toString()}
        ListFooterComponent={
          <View style={{height: 0, marginBottom: 200}}></View>
        }
      />
    </SafeAreaView>
  );
};

export default React.memo(Favorites);
