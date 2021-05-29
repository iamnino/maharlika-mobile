import { StyleSheet } from 'react-native';
import { isIPhoneWithMonobrow } from 'react-native-status-bar-height';

const IS_MONOBROW = isIPhoneWithMonobrow();

import { align, color, flex, justify, bg, font, shadow } from '../../styles/global.styles';

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

    action: {
        paddingBottom: 25
    },
    link: {
        ...align.center,
        marginTop: 25,
        // borderWidth: 1
    },
    label: {
        fontSize: IS_MONOBROW ? 16: 21,
        color: '#16a085'
    }
});