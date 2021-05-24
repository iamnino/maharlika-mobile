import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { align, flex, justify } from '../styles/global.styles';

// Icons
import HeartIcon from '../components/icons/heart';
import BackIcon from '../components/icons/back';
import SearchIcon from '../components/icons/search';

export const styles = StyleSheet.create({ 
    back: {
        ...flex.row,
        ...align.center,
        ...justify.center,
        height: 40,
        paddingRight: 12
    },
    like:{
        position: 'absolute',
        zIndex: 1,
        bottom: 8,
        right: 8,
    },
    heart: {
        ...flex.row,
        ...align.center,
        ...justify.center,
        height: 30,
        width: 30,
        paddingTop: 3,
        borderRadius: 25,
        // backgroundColor: '#00000040',
        backgroundColor: '#ffffff40',
    }
});

export const BackButton = (props: any) => {
    const { onPress } = props;
    return (
        <Pressable style={styles.back} onPress={onPress}>
            <BackIcon color={'#66666D'} width={24} height={24} />
        </Pressable> 
    )
}

export const LikeButton = (props: any) => {
    const { active, onPress } = props;
    return (
        <Pressable onPress={onPress} style={styles.like}>
            <Animatable.View easing={'ease-out'} animation={ active ? 'tada': 'swing' } style={styles.heart}>
                <HeartIcon active={active} color={'#fff'} height={21} width={21}/>
            </Animatable.View>
        </Pressable>
    )
}