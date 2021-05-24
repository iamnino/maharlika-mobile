import { StyleSheet } from 'react-native';
import { align, flex, justify, bg, font, resizeMode, color } from '../../styles/global.styles';

// Color
import colors from '../../constants/colors';

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
});

export const fieldStyles = StyleSheet.create({ 
    container: {
        // borderWidth: 1,
        marginBottom: 18
    },
    label: {
        fontSize: 18,
        marginBottom: 12
    },
    tag: {
        fontSize: 14,
        color: '#242526'
    },
    wrapper: {
        ...flex.row,
    },
    field: {
        ...flex.on,
        ...flex.row,
        minHeight: 40,
        backgroundColor: '#F4F4F4',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 5
    },
    input: {
        ...font.regular,
        width: '100%',
        fontSize: 18,
        lineHeight: 21
    },
    multiline: {
        minHeight: 100,
        maxHeight: 100,
        paddingVertical: 8
    },
    photos: {
        ...flex.on,
        ...flex.row,
        ...flex.wrap,
        width: '100%',
    },
    photoWrapper: {
        ...align.center,
        flexBasis: '50%',
        maxWidth: '50%',
        width: '50%',
        height: 136,
        marginBottom: 12,
    },
    photo: {
        height: '100%',
        width: '100%',
        backgroundColor: '#F4F4F4',
        borderRadius: 8,
        overflow: 'hidden'
    },
    photoEnd: {
        marginRight: 0
    },
    photoRight: {
        paddingLeft: 6
    },
    photoLeft: {
        paddingRight: 6
    },
    image: {
        ...resizeMode.cover,
        width: '100%'
    },
    next: {
        ...flex.row,
        ...align.center,
        ...justify.center,
        borderRadius: 8,
        height: 45,
        paddingHorizontal: 20,
        backgroundColor: colors.light.primary,
        marginBottom: 25
    },
    nextLabel: {
        ...color.white,
        fontSize: 18,
    }
});