import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { isIPhoneWithMonobrow } from 'react-native-status-bar-height';

import { align, flex, justify } from '../styles/global.styles';

// Icons
import HeartIcon from '../components/icons/heart';
import BackIcon from '../components/icons/back';
import SearchIcon from '../components/icons/search';
import Text from './text';

// Constant
const IS_MONOBROW = isIPhoneWithMonobrow();

export const styles = StyleSheet.create({ 
    back: {
        ...flex.row,
        ...align.center,
        ...justify.center,
        height: 40,
        width: 40,
        paddingRight: 5,
        backgroundColor: '#12121250',
        borderRadius: 50
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
    },
    action: {
        backgroundColor: '#FF2D55',
        paddingHorizontal: 10,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 40
    },
    label: {
        color: '#FFFFFF',
        fontSize: IS_MONOBROW ? 13: 16,
        lineHeight: 21
    }
});

export const BackButton = (props: any) => {
    const { onPress } = props;
    return (
        <Pressable style={styles.back} onPress={onPress}>
            <BackIcon color={'#FFF'} width={24} height={24} />
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

export const Action = (props: any) => {
    const { label, onPress } = props;
    return (
        <Pressable onPress={onPress} style={styles.action}>
            <Text label={label} type={'medium'} style={styles.label}/>
        </Pressable>
    )
}