import { StyleSheet } from 'react-native';
import { flex, justify, bg, font } from '../../styles/global.styles';

export const styles = StyleSheet.create({ 
    safearea: {
        ...flex.on,
        ...bg.white
    },
    layout: {
        ...flex.on,
        ...bg.white,
    },
    scroll: {},
    container: {
    },
    wrapper: {
        ...flex.on,
        ...justify.center
    },
});