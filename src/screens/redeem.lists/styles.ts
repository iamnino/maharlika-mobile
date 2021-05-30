import { StyleSheet } from 'react-native';
import { getStatusBarHeight, isIPhoneWithMonobrow } from 'react-native-status-bar-height';

// Constants
const STATUS_BAR_HEIGHT = getStatusBarHeight();
const IS_MONOBROW = isIPhoneWithMonobrow();

// Global Styles
import { align, flex, justify, bg, font, shadow, resizeMode } from '../../styles/global.styles';

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
        position: 'relative'
        // paddingVertical: 25,
        // paddingHorizontal: 16
    },
    wrapper: {
        ...bg.white,
        ...shadow.card,
    },

    // Header
    header: {
        ...flex.row,
        ...align.center,
        marginTop: STATUS_BAR_HEIGHT,
        paddingTop: 12,
        paddingHorizontal: 12,
        position: 'absolute',
        width: '100%',
        zIndex: 100
    },
});