import { StyleSheet, Platform, StatusBar } from 'react-native';

// Layout
export const layout = StyleSheet.create({
    safearea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    } 
});

// Flex
export const flex = StyleSheet.create({ 
    on: { flex: 1 },
    top: { alignItems: 'flex-start' },
    bottom: { alignItems: 'flex-end' },
    column: { flexDirection: 'column' },
    row: { flexDirection: 'row' },
    wrap: { flexWrap: 'wrap' }
});

// Justify
export const justify = StyleSheet.create({ 
    start: { justifyContent: 'flex-start' },
    center: { justifyContent: 'center' },
    end: { justifyContent: 'flex-end' },
    spaceBetween: { justifyContent: 'space-between' }
});

// Alignment
export const align = StyleSheet.create({ 
   center: { alignItems: 'center' },
   start: { alignItems: 'flex-start' },
   end: { alignItems: 'flex-end' }
});

// Color
export const color = StyleSheet.create({ 
    white: { color: '#FFFFFF' },
});

// Background Color
export const bg = StyleSheet.create({
    base: { backgroundColor: '#F8F8FD' },
    white: { backgroundColor: '#FFFFFF' },
    primary: { backgroundColor: '#FFCC00' }
});

// Fonts
export const font = StyleSheet.create({ 
    light: { fontFamily: 'inter-light' },
    regular: { fontFamily: 'inter-regular' },
    medium: { fontFamily: 'inter-medium' },
    semiBold: { fontFamily: 'inter-semibold' },
    bold: { fontFamily: 'inter-bold' },
});

// 
export const textDecoration = StyleSheet.create({ 
    
});

// Resize Mode
export const resizeMode = StyleSheet.create({ 
    contain: { resizeMode: 'contain' },
    cover: { resizeMode: 'cover' },
    repeat: { resizeMode: 'repeat' },
});

export const shadow = StyleSheet.create({
    card: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.03
    }
})