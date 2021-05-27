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
});