import { StyleSheet } from 'react-native';
import { flex, justify, bg, font, shadow, align, resizeMode } from '../../styles/global.styles';

import { getStatusBarHeight, isIPhoneWithMonobrow } from 'react-native-status-bar-height';

const IS_MONOBROW = isIPhoneWithMonobrow();

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
        paddingVertical: 25,
        paddingHorizontal: 16
    },
    wrapper: {
        ...flex.on,
        ...justify.center
    },

     // TODO: Separate Components
    card: {
        ...shadow.card,
        // height: 100, 
        width: '100%', 
     
    },
    cardWrapper: {
        borderRadius: 8,
        // paddingBottom: 12,
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },
    cardImageWrapper: {
        height: 100, 
        width: '100%', 
        backgroundColor: '#E9E9E9',
        position: 'relative'
    },
    cardImage: {
        height: '100%', 
    },
    cardImageGradient: {
        ...resizeMode.cover,
        position: 'absolute',
        bottom: 0,
        height: 100,
        opacity: 0.3
    },
    cardContext: {
        // height: 15, 
        width: '100%', 
        // borderWidth: 1,
        // borderColor: 'red',
        paddingTop: 12,
        paddingHorizontal: 12,
        paddingBottom: 12
    },
    cardContextAvatar: {
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 50
    },
    cardContextWrapper: {
        paddingLeft: 10
    },
    cardContextMetaWrapper: {
        ...flex.row
    },
    cardContextTitle: {
        color: '#000000',
        fontSize: IS_MONOBROW ? 16: 18,
        lineHeight: 21
    },
    cardContextMeta: {
        color: '#6E6E6E',
        fontSize: 11,
        lineHeight: 15,
        marginRight: 8
    },
    cardContextInfo: {
        ...flex.row,
        ...align.center,
        width: '100%', 
        marginBottom: 8,
        // borderWidth: 1,
        // borderColor: 'blue'
    },
    cardContextDescriptionWrapper: {
        // borderWidth: 1,
        // borderColor: 'blue',
        // height: 15, 
        width: '100%', 
        // borderWidth: 1,
        // backgroundColor: 'blue'
    },
    cardContextDescription: {
        color: '#000000',
        fontSize: IS_MONOBROW ? 14: 16,
        lineHeight: IS_MONOBROW ? 16: 18
    },

    // TODO: Separate Components
    cardActions: {
        paddingHorizontal: 12,
        paddingBottom: 8
    },
    cardAction: {
        ...flex.row,
        ...justify.spaceBetween,
        marginBottom: 8
    },
    cardActionButton: {
        backgroundColor: '#387CFE',
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 4,
        borderRadius: 40
    },
    cardActionButtonLabel: {
        color: '#FFFFFF',
        fontSize: IS_MONOBROW ? 13: 16,
        lineHeight: 21
    },

    // TODO: Create Separate Components
    progressContainer: {
        ...flex.column,
        width: '75%', 
    },
    progressLabel: {
        color: '#6E6E6E',
        fontSize: IS_MONOBROW ? 10: 12,
    },
    progressWrapper: {
        width: '100%', 
        height: 5,
        backgroundColor: '#E9E9E9',
        borderRadius: 15,
        position: 'relative',
        overflow: 'hidden',
        marginTop: 5
    },
    progressIndicator: {
        position: 'absolute',
        height: '100%',
        width: '15%',
        borderRadius: 15,
        backgroundColor: '#34C759'
    }
});