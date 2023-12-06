import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    height: '100%',
    paddingLeft: '25px',
    paddingRight: '25px'    
  },
  content: {    
    marginTop: -40,    
    paddingHorizontal: 50
  },
  title: {
    color: theme.colors.text,
    fontWeight:'bold',
    fontSize: 30,
    marginBottom: 16,   
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
    marginTop: 25
  },
  subtitle: {
    color: theme.colors.highlight,
    fontSize: 18,
    marginBottom: 24,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  },
  input: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: 16,
    fontWeight:'bold',
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 2,
    marginBottom: 60,
    marginTop: 10
  },
  label: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: 'left',
    fontWeight: 'bold'
  }
});