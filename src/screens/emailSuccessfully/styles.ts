import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    paddingHorizontal: 25    
  },
  title: {
    color: theme.colors.secondary100,
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: 35,
    marginBottom: 16,   
    fontFamily: theme.fonts.title700,
    lineHeight: 40 
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 20
    ,
    textAlign: 'center',
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  },
  email: {
    marginTop: 15,
    marginBottom: 15,
    width: '80%',
    height: '8%'
  }
});