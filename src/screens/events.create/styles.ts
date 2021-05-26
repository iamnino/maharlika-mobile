import { StyleSheet } from 'react-native';
import { color, flex, justify, bg, font, shadow } from '../../styles/global.styles';

export const styles = StyleSheet.create({ 
    safearea: {
        ...flex.on,
        ...bg.base
    },
    layout: {
        ...flex.on,
        ...bg.base,
    },
    scroll: {},
    container: {
        paddingHorizontal: 16
    },
    wrapper: {
        ...flex.on,
        ...justify.center
    },

    // Forms
    form: {
        width: '100%',
    },
    field: {
        ...flex.column,
        width: '100%',
        // height: 80,
        marginBottom: 15,
    },
    input: {
        ...shadow.card,
        backgroundColor: '#FFFFFF',
        minHeight: 52,
        borderRadius: 10,
        fontSize: 18,
        paddingHorizontal: 15
    },
    label: {
        fontSize: 18,
        marginBottom: 8
    }
});