import { StyleSheet } from 'react-native'
import { theme } from '../../theme'


export const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: theme.colors.gray700,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 173,
      position: 'relative'
    },
    form: {
        height: 54,
        bottom: -54/2,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    input: {
        color: theme.colors.gray100,
        height: 54,
        width: '75%',
        backgroundColor: theme.colors.gray500,
        marginRight: 4,
        borderRadius: 5,
        padding: 16,
        fontSize: theme.font_size.md,
        borderColor: theme.colors.gray700,
        borderWidth: 1
    },
    inputBorder: {
        borderColor: theme.colors.purple,
    },
    button: {
        height: 54,
        width: 54,
        borderRadius: 5,
        backgroundColor: theme.colors.blue_dark,
        alignItems: 'center',
        justifyContent: 'center'
    }
})