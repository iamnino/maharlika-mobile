import { StyleSheet } from 'react-native';
import { flex, justify, bg, font } from '../../styles/global.styles';

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
        paddingBottom: 18,
        paddingHorizontal: 16
    },
    header: {
        paddingBottom: 0
    },
    form: {
        width: '100%',
    }
});