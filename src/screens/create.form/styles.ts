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
        // paddingHorizontal: 18
    },
    wrapper: {
    },
});

export const fieldStyles = StyleSheet.create({ 
    container: {
        // borderWidth: 1,
        marginBottom: 18
    },
    row: {
        paddingHorizontal: 18
    },
    scroll: {
        // marginBottom: 12        
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
        ...align.center,
        minHeight: 40,
        backgroundColor: '#F4F4F4',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 5
    },
    input: {
        ...font.medium,
        width: '100%',
        fontSize: 18,
        lineHeight: 21,
        height: 30,
    },
    inputTitle: {
        height: '100%',
        paddingBottom: 8,
    },
    inputDescription: {
        height: '100%',
    },
    inputPrice: {
        ...font.semiBold,
        fontSize: 21,
        lineHeight: 25,
    },
    title: {
        paddingTop: 6,
        // paddingTop: 5,
        // paddingTop: 8
        // paddingVertical: 8
    },
    currency: {
        maxWidth: 75,
        marginRight: 12
    },
    currencyLabel: {
        fontSize: 18
    },
    price: {
        maxWidth: 165
    },
    multiline: {
        minHeight: 100,
        maxHeight: 100,
        paddingVertical: 8
    },
    photos: {
        // ...flex.on,
        ...flex.row,
        paddingBottom: 12
        // ...flex.wrap,
        // width: '100%',
    },
    photoWrapper: {
        // ...align.center,
        // flexBasis: '50%',
        // maxWidth: '50%',
        width: 150,
        height: 100,
        marginRight: 12,
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
    actions: {
        paddingHorizontal: 18,
        paddingBottom: 18
    },
    action: {
        ...flex.row,
        ...align.center,
        ...justify.center,
        borderRadius: 50,
        height: 45,
        paddingHorizontal: 20,
        backgroundColor: Colors.light.primary,
        // marginBottom: 25
    },
    actionLabel: {
        ...color.white,
        fontSize: 18,
    },
    condition: {
        ...flex.row,
        ...align.center,
        ...justify.center,
        backgroundColor: '#F4F4F4',
        minHeight: 32,
        paddingHorizontal: 15,
        borderRadius: 25,
        marginRight: 12
    },
    conditionLabel: {
        fontSize: 16
    },
    actionDraft: {
        backgroundColor: '#D8D8D8',
    },
    actionDraftLabel: {
        color: '#66666D',
        fontSize: 18
    }
});