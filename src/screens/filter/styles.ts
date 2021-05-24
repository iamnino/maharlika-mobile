import { StyleSheet } from 'react-native';
import { flex, justify, bg, font } from '../../styles/global.styles';

const styles = StyleSheet.create({ 
    safearea: {
        ...flex.on,
        ...bg.white
    },
    layout: {
        ...flex.on,
        ...bg.white
    },
    scroll: {},
    container: {
        paddingHorizontal: 10
    },
    wrapper: {
        ...flex.on,
        ...justify.center
    },
});

export default styles;