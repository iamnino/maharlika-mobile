import { StyleSheet } from 'react-native';
import { flex, justify, bg, font } from '../../styles/global.styles';

const styles = StyleSheet.create({ 
    safearea: {
        ...flex.on,
        ...bg.primary
    },
    layout: {
        ...flex.on
    },
    scroll: {},
    container: {
    },
    wrapper: {
        ...flex.on,
        ...justify.center
    },
    form: {},

    // TODO: Update Styles
    h1: {
        fontSize: 36,
        fontWeight: '600',
        color: '#FFFFFF'
    },
    bottom: {
        
    },
    // Actions
    action: {
        paddingBottom: 25,
        paddingHorizontal: 25,
        ...bg.primary
    },
    actionButton: {
        backgroundColor: '#FFFFFF',
        minHeight: 52,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionButtonFocus: {
    },
    actionLabel: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: '600',
        color: '#222222'
    }
});

export default styles;