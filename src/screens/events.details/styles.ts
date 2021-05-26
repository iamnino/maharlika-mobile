import { StyleSheet } from 'react-native';
import { isIPhoneWithMonobrow } from 'react-native-status-bar-height';
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
        // paddingVertical: 25,
        // paddingHorizontal: 16
    },
    wrapper: {
        ...bg.white,
        ...shadow.card,
    },

    // Banner
    banner: {
        height: 225, 
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
        paddingHorizontal: 12,
        // paddingBottom: 18,
    },
    avatar: {
        height: 40,
        width: 40,
        backgroundColor: '#ecf0f1',
        borderRadius: 50
    },
    contextWrapper: {
        paddingLeft: 10
    },
    contextMetaWrapper: {
        ...flex.row
    },
    contextTitle: {
        color: '#000000',
        fontSize: IS_MONOBROW ? 16: 18,
        lineHeight: 21
    },
    contextMeta: {
        color: '#6E6E6E',
        fontSize: IS_MONOBROW ? 11: 12,
        lineHeight: 15,
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
        fontSize: IS_MONOBROW ? 14: 16.6,
        lineHeight: IS_MONOBROW ? 16: 21
    },

    actions: {
        paddingHorizontal: 12,
        paddingTop: 8,
        paddingBottom: 8
    },
    action: {
        ...flex.row,
        ...justify.spaceBetween,
        marginBottom: 8
    },

    tabs: {
        paddingTop: 16,
        paddingBottom: 0,
       
    },
    tab: {
        // borderWidth: 1,
        // borderColor: 'red',
        minHeight: 300,
        width: '100%'
    }
    
});