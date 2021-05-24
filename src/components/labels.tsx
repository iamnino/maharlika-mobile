import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Image, Pressable, View } from 'react-native';
import PropTypes from 'prop-types';

import { align, bg, flex, justify, resizeMode } from '../styles/global.styles';

// Components
import Text from '../components/text';


type StatusProps = {
    containerStyles?: any,
    type?: string
}

const sponsoredStyles = StyleSheet.create({ 
    container: {
        position: 'absolute',
        top: 6,
        left: 6,
        backgroundColor: '#FFB300',
        // width: 10,
        zIndex: 1,
        borderRadius: 3
    },
    label: {
        fontSize: 11,
        paddingHorizontal: 5,
        paddingTop: 2,
        paddingBottom: 3,
        color: '#FFF'
    }
});

const statusStyles = StyleSheet.create({ 
    container: {
        ...align.center,
        ...justify.center,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#FFB300',
        width: '100%',
        zIndex: 1,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.05,
    },
    label: {
        fontSize: 16,
        paddingHorizontal: 5,
        paddingTop: 3,
        paddingBottom: 4,
        color: '#FFF',
        textAlign: 'center'
    },
    draft: {
        backgroundColor: '#FFB300'
    },
    active: {
        backgroundColor: '#34C759'
    },
    reserved: {
        backgroundColor: '#FF3B30'
    },
    sold: {
        backgroundColor: '#007AFF'
    },
    removed: {
        backgroundColor: '#242526'
    },
});

export const SponsoredLabel = (props: any) => {
    const { containerStyles }: any = props;
    return (
        <View style={[sponsoredStyles.container, containerStyles]}>
            <Text label={'Sponsored'} type={'medium'} style={sponsoredStyles.label}/>
        </View>
    )
};

export const StatusLabel = (props: StatusProps) => {
    const { containerStyles, type }: any = props;

    let label: string = '';
    let bg: any = {};

    switch (type) {
        case 'draft':
            label = 'Draft';
            bg = statusStyles.draft;
            break;
        case 'active':
            label = 'Active';
            bg = statusStyles.active;
            break;
        case 'reserved':
            label = 'Reserved';
            bg = statusStyles.reserved;
            break;
        case 'sold':
            label = 'Sold';
            bg = statusStyles.sold;
            break;
        case 'removed':
            label = 'Removed';
            bg = statusStyles.removed;
            break;
        default:
            label = 'Draft';
            bg = statusStyles.draft;
            break;
    }

    return (
        <View style={[statusStyles.container, bg, containerStyles]}>
            <Text label={label} type={'medium'} style={statusStyles.label}/>
        </View>
    )
}
