import { StyleSheet } from 'react-native';
import { isIPhoneWithMonobrow } from 'react-native-status-bar-height';

const IS_MONOBROW = isIPhoneWithMonobrow();

import { flex, justify, bg, font, align, shadow } from '../../styles/global.styles';

export const styles = StyleSheet.create({ 
    safearea: {
        ...flex.on,
        ...bg.base,
    },
    layout: {
        ...flex.on,
        ...bg.base,
        position: 'relative',
    },
    container: {
        ...flex.on,
        ...flex.row,
        ...align.center,
        paddingHorizontal: 16
    },
    wrapper: {
        width: '100%',
        paddingTop: 25,
        height: '60%'
    },
    header: {
        ...align.center,
        marginBottom: 20
    },
    form: {
        width: '100%'
    },
    title: {
        fontSize: IS_MONOBROW ? 21: 24,
    },
    button: {
        ...flex.row,
        ...align.center,
        ...justify.center,
        ...shadow.card,
        borderRadius: 12,
        width: '45%',
        backgroundColor: '#FFFFFF',
        height: 65,
        marginBottom: 21,
    },
    divider: {
        width: '5%'
    },
    label: {
        fontSize: IS_MONOBROW ? 15: 18,
    },
    active: {
        backgroundColor: '#1abc9c'
    }, 
    white: {
        color: '#FFF'
    },
    
    // Action
    action: {
        // position: 'absolute',
        // bottom: 0,
        width: '100%',
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 18
    },
});