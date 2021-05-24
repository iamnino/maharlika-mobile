import { StyleSheet } from 'react-native';
import { flex, color, bg, align, justify, resizeMode } from '../../styles/global.styles';

const styles = StyleSheet.create({ 
    safearea: {
        ...flex.on,
        ...bg.white,
    },
    layout: {
        ...flex.on,
        ...bg.white,
    },
    scroll: {},
    container: {
    },
    wrapper: {
        backgroundColor: '#F2F2F2'
    },
    section: {
        ...bg.white,
        paddingTop: 10,
        paddingBottom: 15
    },
    action: {
        ...flex.on,
        ...flex.row,
        ...align.center,
        paddingLeft: 18,
    },
    content: {
        ...flex.on,
        ...flex.row,
        ...align.center,
        ...justify.spaceBetween,
        paddingVertical: 16,
        // borderWidth: 1,
        paddingRight: 18,
        // borderBottomWidth: 1,
        borderBottomColor: '#EEEEEF'
    },
    contentEnd: {
        borderBottomWidth: 0,
        borderBottomColor: '#FFFFFF'
    },
    icon: {
        height: 21,
        width: 21,
        marginRight: 18,
        borderRadius: 15,
        backgroundColor: '#F2F2F2',
    },
    label: {
        fontSize: 18
    },
});

export const infoStyle = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    wrapper: {
        ...flex.on,
        ...flex.row,
        ...align.center,
    },
    content: {
        ...flex.on,
        ...flex.row,
        ...align.start,
        ...justify.spaceBetween,
    },
    context: {
        minWidth: 50,
        // borderWidth: 1
    },
    meta: {

    },
    avatar: {
        ...flex.row,
        ...align.center,
        ...justify.center,
        width: 64,
        height: 64,
        marginRight: 15,
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: '#D8D8D8',
        position: 'relative'
    },
    avatarHighlight: {
        width: 61,
        height: 61,
        marginRight: 15,
        borderRadius: 50,
        borderWidth: 2.5,
        borderColor: '#FFF',
        position: 'absolute',
        zIndex: 1
    },
    avatarPhoto: {
        ...resizeMode.contain,
        width: '100%',
        height: '100%'
    },
    name: {
        fontSize: 24,
        color: '#282A2B'
    },
    hash: {
        fontSize: 12,
        color: '#282A2B90'
    },
    actionButton: {
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 5
    },
    actionLabel: {
        fontSize: 16,
        color: '#282A2B'
    }
});

export const actionStyle = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        // borderWidth: 1,
    },
    wrapper: {
        ...flex.row,
    },
    action: {
        ...flex.column,
        ...align.center,
        ...justify.center,
        height: 50,
        width: '25%',
    },
    icon: {
        marginBottom: 5
    },
    label: {
        fontSize: 16,
        color: '#282A2B'
    },
    card: {
        height: 60,
        borderRadius: 10,
        paddingHorizontal: 18,
        backgroundColor: '#007AFF20',
        marginTop: 18,
    },
    cardWrapper: {
        ...flex.on,
        ...flex.row,
        ...align.center,
        height: '100%',
        // borderWidth: 1,
    },
    cardBody: {
        ...flex.on,
        ...flex.row,
        ...align.center,
        // flexWrap: 'wrap'
    },
    cardIcon: {
        marginRight: 10
    },
    cardLabel: {
        fontSize: 16,
        color: '#282A2B'
    }
});

export default styles;