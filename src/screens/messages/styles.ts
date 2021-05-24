import { StyleSheet } from 'react-native';
import { flex, justify, bg, font, resizeMode } from '../../styles/global.styles';

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
    },
    wrapper: {
    },
});

export const chatStyles = StyleSheet.create({
    container: {
        ...flex.on,
        paddingHorizontal: 15,
        paddingBottom: 8
    },
    wrapper: {
        ...flex.on,
        ...flex.row,
        paddingVertical: 8
    },
    content: {
        ...flex.on,
        ...flex.row
    },
    photo: {
        height: 58, 
        width: 58,
        backgroundColor: '#EEEEEF',
        borderRadius: 50,
        overflow: 'hidden',
        position: 'relative'
    },
    photoImage: {
        ...resizeMode.contain,
        width: '100%',
        height: 58
    },
    name: {
        fontSize: 18
    },
    message: {
        fontSize: 16,
        color: '#7D8184'
    },
    time: {
        fontSize: 14,
        color: '#AAAAAA'
    },
    context: { 
        ...flex.on,
        ...flex.row,
        ...justify.spaceBetween,
        paddingTop: 8, 
        paddingBottom: 10, 
        marginLeft: 12
    }
});