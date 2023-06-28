import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 0,
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  edit: {height: 24, width: 24},
  item: {
    padding: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    color: colors.grey,
    marginBottom: 16,
  },
  content: {flex: 1},
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 12,
    marginBottom: 12,
  },
  email: {fontSize: 14, color: colors.grey, marginBottom: 16},
  button: {
    paddingVertical: 12,
    marginTop: 16,
  },
});
