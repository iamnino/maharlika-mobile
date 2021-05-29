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

    // Banner
    banner: {
        height: 325, 
        width: '100%', 
        backgroundColor: '#E9E9E9',
        position: 'relative'
    },
    image: {
        height: '100%', 
    },
    gradient: {
        ...resizeMode.cover,
        position: 'absolute',
        bottom: 0,
        height: 100,
        opacity: 0.8,
        // borderWidth: 1,
        // borderColor: 'red'
    },

    context: {
        width: '100%',
        paddingTop: 12,
        paddingBottom: 5,

        // paddingHorizontal: 12,
        // paddingBottom: 18,
    },
    contextWrapper: {
        paddingLeft: 10
    },
    contextMetaWrapper: {
        ...flex.row,
        marginTop: 3
    },
    contextTitle: {
        color: '#000000',
        fontSize: IS_MONOBROW ? 18: 21,
        lineHeight: 21,
    },
    contextMeta: {
        color: '#6E6E6E',
        fontSize: IS_MONOBROW ? 14: 16,
        // lineHeight: 15,
        marginRight: 8
    },
    contextInfo: {
        ...flex.row,
        ...align.center,
        width: '100%', 
        marginBottom: 8
    },
    contextDescriptionWrapper: {
        width: '100%', 
    },
    contextDescription: {
        color: '#000000',
        fontSize: IS_MONOBROW ? 14: 16.5,
        lineHeight: IS_MONOBROW ? 16: 21
    },

    action: {
        ...flex.column,
        ...justify.spaceBetween,
        marginBottom: 8,
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

    card: {
        ...shadow.card,
        // height: 100, 
        width: '100%', 
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginBottom: 25,
        paddingHorizontal: 18,
        paddingVertical: 15        
    },
    cardRow: {
        ...flex.row,
        ...justify.spaceBetween,
    }
});