import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  GestureResponderEvent,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';

type Props = {
  images?: string[];
};
const {height, width} = Dimensions.get('window');

const ImageCarousel = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderImage = ({item, index}: {item: string; index: number}) => {
    return <Image source={{uri: item}} style={styles.image} />;
  };

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setActiveIndex(currentValue => event.nativeEvent.contentOffset.x / width);
  };

  return (
    <View>
      <FlatList
        style={styles.list}
        pagingEnabled
        horizontal
        data={props.images}
        renderItem={renderImage}
        onMomentumScrollEnd={handleScrollEnd}
      />
      <View style={styles.pagination}>
        {props.images?.map((_, i) => (
          <View
            key={i}
            style={[
              styles.paginationLine,
              i === activeIndex ? styles.activeLine : {},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default React.memo(ImageCarousel);
