import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
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
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  label: {color: colors.grey, fontSize: 12, marginBottom: 6},
  input: {color: colors.blue, fontSize: 14, fontWeight: '500'},
});
