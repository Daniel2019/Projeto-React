import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: 'linear-gradient(90deg, rgba(140,43,226,1) 0%, rgba(107,22,225,1) 35%, rgba(78,3,224,1) 100%)',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  title: {
    flex: 1,
    color: theme.colors.white,
    fontFamily: theme.fonts.text500,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: theme.colors.line
  },
  icon: {
    width: 24,
    height: 18
  }
});