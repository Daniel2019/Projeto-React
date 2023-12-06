import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 25    
  },
  title: {
    color: theme.colors.secondary100,
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: 30,
    marginBottom: 16,   
    fontFamily: theme.fonts.title700,
    lineHeight: 40 
  },
  subtitle: {
    color: theme.colors.highlight,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  },
  email: {
    marginTop: 50,
    marginBottom: 15,
    width: 320,
    height: 220
  }
});