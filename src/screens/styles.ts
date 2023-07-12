import { StyleSheet } from 'react-native'
import { theme } from '../theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.gray600,
    },
    taskContainer: {
      flex: 1,
      marginTop: 55,
      marginHorizontal: 24
    },
    taskCreated: {
      color: theme.colors.blue,
      fontSize: theme.font_size.md,
      fontFamily: theme.font_family.bold
    },
    taskDone: {
      color: theme.colors.purple,
      fontSize: theme.font_size.md,
      fontFamily: theme.font_family.bold
    },
    info: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    counterContainer: {
      backgroundColor: theme.colors.gray400,
      width: 25,
      height: 19,
      borderRadius: 999,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 8
    },
    counterText: {
      color: theme.colors.gray200,
      fontSize: theme.font_size.md,
      fontFamily: theme.font_family.bold
    }
  });
  