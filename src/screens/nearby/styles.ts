import { StyleSheet } from 'react-native';
import { align, flex, justify, bg, font, resizeMode } from '../../styles/global.styles';

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
        paddingTop: 12,
        paddingHorizontal: 10
    },
});