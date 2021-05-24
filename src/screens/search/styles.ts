import { StyleSheet } from 'react-native';
import { align, bg, flex, justify, font, resizeMode } from '../../styles/global.styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';

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
    banner: {
        ...flex.on,
        ...align.start,
        ...justify.end,
        paddingHorizontal: 15,
        paddingBottom: 15,
        width: '100%',
        height: 210,
        backgroundColor: '#F2F2F2',
        paddingTop: getStatusBarHeight(),
    },
    bannerImage: {
        ...resizeMode.cover,
        position: 'absolute',
        height: 210
    },
    bannerGradient: {
        ...resizeMode.cover,
        position: 'absolute',
        bottom: 0,
        height: 100,
        opacity: 0.9
    },
    bannerWrapper: {
        width: '100%',
        zIndex: 1
    },
    bannerTitle: {
        fontSize: 29,
        color: '#FFF'
    },
    bannerSubTitle: {
        fontSize: 18,
        marginBottom: 0,
        color: '#FFF'
    },
    horizontalScroll: {
        paddingHorizontal: 12,
        paddingTop: 12,
        paddingBottom: 12,
    }
});

export const headerStyles =  StyleSheet.create({ 
    container: {
        ...flex.on,
        //  ...bg.white,
        paddingTop: getStatusBarHeight() + getStatusBarHeight() / 3,
        width: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 1,
        paddingHorizontal: 12,
    },
    wrapper: {
        ...flex.on,
        ...flex.row,
        ...align.center,
        minHeight: 50,
    },
    back: {
        ...flex.row,
        ...align.center,
        ...justify.center,
        height: 45,
        width: 45,
        backgroundColor: '#00000040',
        borderRadius: 25,
        paddingRight: 3
    },
});

export const sectionStyles = StyleSheet.create({ 
    // Sections
    wrapper: {
        paddingTop: 5,
        paddingHorizontal: 10
    },
    title: {
        fontSize: 21,
        color: '#282A2B'
    },
    content: {
        paddingTop: 18,
    },
});