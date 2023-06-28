import React, {useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RootStackParamList from '../../../navigation';
import {ScreenNames} from '../../../utils/routes';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {Category, categories} from '../../../data/categories';
import CategoryBox from '../../../components/CategoryBox';
import {Product, products} from '../../../data/products';
import ProductHomeItem from '../../../components/ProductHomeItem';
import {colors} from '../../../utils/colors';
import Splash from '../../auth/Splash';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Home
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home = ({navigation}: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<number>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [keyword, setKeyword] = useState<string>();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (selectedCategory && !keyword) {
      const updatedProducts = products.filter(
        product => product?.category === selectedCategory,
      );
      setFilteredProducts(updatedProducts);
    } else if (selectedCategory && keyword) {
      const updatedProducts = products.filter(
        product =>
          product?.category === selectedCategory &&
          product.title.toLowerCase().includes(keyword.toLowerCase()),
      );
      setFilteredProducts(updatedProducts);
    } else if (!selectedCategory && keyword) {
      const updatedProducts = products.filter(product =>
        product.title.toLowerCase().includes(keyword.toLowerCase()),
      );
      setFilteredProducts(updatedProducts);
    } else if (selectedCategory && !keyword) {
      setFilteredProducts(products);
    }
  }, [selectedCategory, keyword]);

  const renderCategoryItem = ({
    item,
    index,
  }: {
    item: Category;
    index: number;
  }) => {
    return (
      <CategoryBox
        title={item.title}
        image={item.image}
        isSelected={item.id === selectedCategory}
        onPress={() => {
          setSelectedCategory(item.id);
        }}></CategoryBox>
    );
  };

  const renderProductItem = ({item, index}: {item: Product; index: number}) => {
    const onProductPress = (product: Product) => {
      navigation.navigate(ScreenNames.ProductDetails, {product});
    };
    return (
      <ProductHomeItem
        {...item}
        onPress={() => onProductPress(item)}></ProductHomeItem>
    );
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <Header
        title="Find All You Need"
        showSearch
        onSearch={setKeyword}
        keyword={keyword}
        style={styles.header}
      />
      <View style={styles.top}>
        <FlatList
          style={styles.list}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item: Category, index: number) => item.id.toString()}
        />
      </View>
      <FlatList
        numColumns={2}
        style={styles.productsList}
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item: Product, index: number) => item.id.toString()}
        ListFooterComponent={
          <View style={{height: 0, marginBottom: 200}}></View>
        }
      />
    </SafeAreaView>
  );
};

export default Home;
