import { StyleSheet } from 'react-native';
import { align, flex, justify, bg, font, resizeMode, color } from '../../styles/global.styles';

// Color
import Colors from '../../constants/colors';

export const styles = StyleSheet.create({ 
    safearea: {
        ...flex.on,
        ...bg.white
    },
    layout: {
        ...flex.on,
        ...bg.white,
    },
    scroll: {},
    container: {
        paddingTop: 12,
        paddingHorizontal: 18
    },
    wrapper: {

    },
    action: {
        ...flex.row,
        ...align.center,
        ...justify.center,
        borderRadius: 8,
        minHeight: 125,
        marginBottom: 18,
        backgroundColor: '#FFF',
        // borderWidth: 1,
        borderColor: "#E5E5EA",
        borderWidth: 1,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.05,
    },
    actionContent: {
        ...flex.column,
        ...align.center,
        ...justify.center,
        paddingVertical: 10,
        // borderWidth: 1
    },
    actionImage: {
        width: 60,
        height: 60,
        marginBottom: 8,
        borderRadius: 15,
        backgroundColor: Colors.light.primary
    },
    actionLabel: {
        fontSize: 18
    }
});