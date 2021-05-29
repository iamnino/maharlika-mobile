import { StyleSheet } from 'react-native';
import { isIPhoneWithMonobrow } from 'react-native-status-bar-height';

// Global Styles
import { 
    flex, 
    justify, 
    bg, 
    font, 
    shadow, 
    align, 
    resizeMode 
} from '../../styles/global.styles';

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
        paddingBottom: 18,
        paddingHorizontal: 16
    },
    pointsContainer: {
        ...shadow.card,
        borderTopColor: '#00000010',
        borderTopWidth: 1,
        position: 'absolute',
        bottom: 0,
        height: 45,
        backgroundColor: '#FFF',
        width: '100%'
    },
    pointsWrapper: {
        ...flex.row,
        ...align.center,
        ...justify.spaceBetween,
        height: '100%',
        paddingHorizontal: 16
    },
    pointsLabel: {
        color: '#00000065',
        fontSize: 15
    },
    points: {
        color: '#000000',
        fontSize: 21
    },

});