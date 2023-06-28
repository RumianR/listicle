import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  image: {width: width, height: height * 0.45},
  list: {},
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 50,
  },
  paginationLine: {
    height: 4,
    width: 20,
    borderRadius: 10,
    margin: 5,
    backgroundColor: colors.white,
  },
  activeLine: {
    backgroundColor: colors.black,
    width: 30,
  },
});
