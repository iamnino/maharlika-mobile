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
});