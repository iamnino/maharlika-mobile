import { StyleSheet } from 'react-native';
import { flex, justify, bg, font, align } from '../../styles/global.styles';

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
        ... flex.row,
        ...align.center,
        height: '100%',
    },
    wrapper: {
        paddingHorizontal: 16
    },
    header: {
        paddingBottom: 0
    },
    form: {
        width: '100%',
    },
    action: {

    },
    link: {
        ...align.center,
        marginTop: 25,
        // borderWidth: 1
    },
    label: {
        fontSize: 16,
        color: '#16a085'
    }
});