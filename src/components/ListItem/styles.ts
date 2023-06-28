import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: colors.white,
    marginVertical: 12,
    borderRadius: 5,
  },
  content: {},
  title: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitle: {color: colors.grey, fontSize: 12},
  arrow: {width: 32, height: 32},
});
