import { StyleSheet } from 'react-native';
import { layout, flex, justify, bg, font, align, resizeMode, color } from '../../styles/global.styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';

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
        ...flex.on,
        ...flex.column,
        position: 'relative',
    },
    wrapper: {
        position: 'relative'
    },

    // Header Action
    header: {
       
    },

    // Banner
    banner: {
        height: 350,
        backgroundColor: '#AEAEB2',
        position: 'relative'
    },
    image: {
        ...resizeMode.cover,
        width: '100%'
    },

    // Description
    section: {
        paddingHorizontal: 12,
        paddingTop: 10
    },
    info: {
        marginBottom: 8,
    },
    title: {
        fontSize: 21,
        color: '#2C2C2E',
        marginBottom: 5
    },
    price: {
        fontSize: 24,
        color:'#1C1C1E'
    },
    metaDescription: {
        ...flex.row,
        marginBottom: 10
    },
    metaContainer: {
        ...flex.row,
        ...align.center,
        height: 24,
        paddingRight: 10,
        paddingLeft: 5,
        borderRadius: 15,
        backgroundColor: '#F4F4F4',
        marginRight: 5
    },
    metaIcon: {
        height: 16,
        width: 16,
        backgroundColor: '#E5E5EA',
        borderRadius: 15,
        marginRight: 5
    },
    meta: {},
    description: {
        borderTopWidth: 1,
        borderTopColor: '#E5E5EA',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5EA',
        paddingTop: 10,
        paddingBottom: 15
    },
    descriptionLabel: {
        fontSize: 18,
        marginBottom: 8
    },
    descriptionContent: {
        fontSize: 16
    },

    // Action
    actions: {
        height: 54,
        ...flex.row,
        ...align.center,
        ...justify.spaceBetween,
        paddingHorizontal: 12,
        borderTopWidth: 1,
        borderTopColor: '#E5E5EA',
        // shadowColor: "#000000",
        // shadowOffset: { width: 0, height: -5 },
        // shadowOpacity: 1,
    },
    action: {
        ...flex.row,
        ...align.center,
        ...justify.center,
        height: 40,
        borderRadius: 5,
        backgroundColor: Colors.light.primary,
        width: '49%'
    },
    actionLabel: {
        ...color.white,
        fontSize: 16,
    },
    spacer: {
        width: '2%'
    }
});

export const sellerStyles =  StyleSheet.create({
    container: {
        paddingTop: 10
    },
    title: {
        fontSize: 18,
        marginBottom: 12
    },
    wrapper: {
        ...flex.row,
        ...align.center,
        ...justify.spaceBetween,
        marginBottom: 18
    },
    content: {
        ...flex.row,
    },
    avatar: {
        width: 45,
        height: 45,
        backgroundColor: '#AEAEB2',
        marginRight: 15,
        borderRadius: 25
    },
    image: {
        ...resizeMode.contain,
        width: '100%',
        height: '100%'
    },
    name: {
        fontSize: 18
    },
    posts: {
        fontSize: 15
    },
    context: {
        ...justify.center,
        ...align.start,
        height: 45,
    },
    follow: {
        ...flex.row,
        ...align.center,
        ...justify.center,
        height: 32,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: Colors.light.primary,
    },
    followLabel: {
        ...color.white,
        fontSize: 15,
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

