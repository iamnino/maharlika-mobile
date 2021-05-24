import { StyleSheet } from 'react-native';
import { align, flex, justify, bg, font, resizeMode } from '../../styles/global.styles';

import Colors from '../../constants/colors';


const styles = StyleSheet.create({ 
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

    // Banner
    banner: {
        height: 180,
        backgroundColor: '#F4F4F4',
        overflow: 'hidden'
    },
    bannerImage: {
        ...resizeMode.cover,
        width: '100%',
        height: '100%'
    }
});

export const sectionStyles = StyleSheet.create({ 
    // Sections
    wrapper: {
        paddingTop: 15,
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

export const categoryStyles = StyleSheet.create({ 
    container: {
        minHeight: 100,
        width: '100%',
        paddingHorizontal: 0,
        paddingTop: 15,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5EA",
    },
    wrapper: {
        ...flex.on,
        ...flex.row,
        ...flex.wrap,
        width: '100%',
    },
    content: {
        
    },
    category: {
        ...flex.on,
        ...justify.start,
        ...align.center,
        flexBasis: '25%',
        width: '25%',
        maxWidth: '25%',
        minHeight: 50,
        marginBottom: 15,
        paddingHorizontal: 8
    },
    label: {
        textAlign: 'center',
        fontSize: 14
    },
    icon: {
        ...flex.row,
        ...align.center,
        ...justify.center,
        width: 48,
        height: 48,
        borderRadius: 24,
        overflow : 'hidden',
        marginBottom: 8
    }
});                                                                                                         

export default styles;





