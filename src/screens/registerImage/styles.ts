import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
    paddingHorizontal: 30   
  },
  title: {
    color: theme.colors.text,
    fontWeight:'bold',
    fontSize: 30,
    marginBottom: 16,   
    fontFamily: theme.fonts.title700,
    lineHeight: 40 
  },
  subtitle: {
    color: theme.colors.highlight,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 64,
    fontWeight: 'bold',
    fontFamily: theme.fonts.title700,
    lineHeight: 25
  },
  buttondiv: {
    marginTop: 40
  },
  imageLogo: {
    marginTop: 15,
    marginBottom: 15,
    width: '80%',
    height: '8%'
  },
  image: {
    marginTop: 25,
    marginBottom: 15,
    marginLeft: 50,
    width: 200,
    height: 180
  }
});