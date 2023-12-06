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
    label: {
        color: theme.colors.label,
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 'bold',
        lineHeight: 40
    },
    input: {
        color: theme.colors.primary,
        fontFamily: theme.fonts.text400,
        fontSize: 18,
        fontWeight:'bold',
        borderBottomColor: theme.colors.primary,
        borderBottomWidth: 2,
        marginBottom: 15,
        marginTop: 10
    }
});