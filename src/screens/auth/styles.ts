import { StyleSheet } from 'react-native';
import { flex, color, bg } from '../../styles/global.styles';

const styles = StyleSheet.create({ 

    // Wrappers
    safearea: {
        ...flex.on,
        ...bg.primary,
    },
    layout: {
        flex: 1,
        ...bg.primary,
        paddingTop: 30
    },
    scroll: {
    },
    container: {
        flex: 1,
        // paddingTop: 40
    },
    wrapper: {
        width: '100%',
        paddingHorizontal: 25
    },
    row: {
        ...flex.row
    },

    // Steps
    steps: {
        ...flex.row,
        paddingTop: 25,
        paddingHorizontal: 25
    },
    step: {
        flex: 1,
        height: 4,
        // padding: 4,
        borderRadius: 5,
        marginRight: 6,
        backgroundColor: '#FFFFFF',
        opacity: 0.4
    },
    stepActive: {
        opacity: 1
    },

    // Labels
    h1: {
        fontSize: 32,
        lineHeight: 36,
        fontWeight: '700',
        ...color.white
    },
    h2: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: '500',
        marginBottom: 30,
        color: '#FFFFFF'
    },
    h3: {
        fontSize: 15,
        lineHeight: 21,
        fontWeight: '500',
        color: '#FFFFFF',
    },

    // Text Styles
    link: {
        textDecorationLine: 'underline', 
    },
    emphasis: {
        fontWeight: '600'
    },

    // Forms
    form: {
        width: '100%',
        // flex: 1,
    },
    header: {
        ...flex.column
    },
    field: {
        width: '100%',
        ...flex.row
    },
    input: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        minHeight: 52,
        borderRadius: 10,
        fontSize: 18,
        paddingHorizontal: 15
    },
    error: {
        marginTop: 12,
        ...color.white,
        fontSize: 14
    },
    code: {
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center'
    },
    statement: {
        display: 'flex',
    },

    // Options
    option: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        minHeight: 52,
        paddingHorizontal: 15,
        borderRadius: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    optionLabel: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: '500',
    },
    optionIndicator: {
        borderWidth: 1.8,
        borderColor: '#BFBFBF',
        borderRadius: 15,
        height: 21,
        width: 21,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionIndicatorActive: {
        backgroundColor: '#666666',
        height: 10,
        width: 10,
        borderRadius: 15
    },
    optionMore: {
        // borderWidth: 1
    },
    optionMoreLabel: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: '500',
        color: '#FFFFFF'
    },

    // Photos
    photo: {
        height: 105,
        width: '31%',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
    },

    // Actions
    action: {
        paddingBottom: 25
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