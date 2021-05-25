import { StyleSheet } from 'react-native';
import { flex, justify, bg, font, shadow } from '../../styles/global.styles';

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
        paddingVertical: 25,
        paddingHorizontal: 16
    },
    wrapper: {
        ...flex.on,
        ...justify.center
    },
    card: {
        ...shadow.card,
        height: 100, 
        width: '100%', 
        backgroundColor: '#FFF',
        borderRadius: 8
    }
});