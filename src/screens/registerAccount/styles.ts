import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',    
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 40,
        marginBottom: 16,   
        fontFamily: theme.fonts.title700,
        lineHeight: 40 
    },
    label: {
        color: theme.colors.primary,
        fontFamily: theme.fonts.text500,
        fontSize: 15,
        textAlign: 'left',
        fontWeight: 'bold'
    },
    input: {
        color: theme.colors.primary,
        fontFamily: theme.fonts.text400,
        fontSize: 25,
        textAlign: 'center',
        fontWeight:'bold',
        borderBottomColor: theme.colors.primary,
        borderBottomWidth: 2,
        marginBottom: 10,
        marginTop: 10
    }
});