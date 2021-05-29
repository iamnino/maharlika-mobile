import { StyleSheet } from 'react-native';
import { isIPhoneWithMonobrow } from 'react-native-status-bar-height';

const IS_MONOBROW = isIPhoneWithMonobrow();

import { flex, justify, bg, font, align, shadow } from '../../styles/global.styles';

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
        paddingHorizontal: 16
    },
    link: {
        ...align.center,
        marginTop: 25,
        // borderWidth: 1
    },
    label: {
        fontSize: IS_MONOBROW ? 16: 21,
        color: '#16a085'
    },
    
});