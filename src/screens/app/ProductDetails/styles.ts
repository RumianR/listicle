import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  backContainer: {
    backgroundColor: colors.white,
    position: 'absolute',
    zIndex: 1,
    padding: 10,
    borderRadius: 8,
    margin: 24,
    marginRight: 16,
  },
  backIcon: {height: 20, width: 20},
  container: {},
  footer: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: height * 0.45,
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -40,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  button: {
    width: width * 0.7,
  },
  bookmarkContainer: {
    backgroundColor: colors.lightGrey,
    padding: 8,
    borderRadius: 8,
  },
  bookmarkIcon: {width: 40, height: 40},
  description: {color: colors.textGrey, fontWeight: '300', marginVertical: 8},
});
