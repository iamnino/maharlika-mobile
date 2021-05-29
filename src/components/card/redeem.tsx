import React, { useState, memo } from 'react';
import { Image, Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { isIPhoneWithMonobrow } from 'react-native-status-bar-height';

const IS_MONOBROW = isIPhoneWithMonobrow();

// Components
import Text from '../text';
import Progress from '../progress';
import { Action } from '../buttons';

// Constants
import Images from '../../constants/images';

// Global Styles
import { align, flex, font, shadow, resizeMode, justify } from '../../styles/global.styles';

export const styles = StyleSheet.create({
    container: {
        ...shadow.card,
        width: '45%',
        // borderWidth: 1,
        // borderColor: 'red'
    },
    wrapper: {
        borderRadius: 8,
        // paddingBottom: 12,
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },

    banner: {
        height: 115, 
        width: '100%', 
        backgroundColor: '#E9E9E9',
        position: 'relative'
    },
    image: {
        height: '100%', 
    },
    gradient: {
        ...resizeMode.cover,
        position: 'absolute',
        bottom: 0,
        height: 100,
        opacity: 0.3
    },
    context: {
        width: '100%',
        paddingTop: 8,
        paddingHorizontal: 8,
        paddingBottom: 10
    },
    contextWrapper: {
        // paddingLeft: 10
    },
    contextTitle: {
        color: '#000000',
        fontSize: IS_MONOBROW ? 14: 16,
        lineHeight: 21
    },
    contextMeta: {
        color: '#6E6E6E',
        fontSize: IS_MONOBROW ? 9: 11,
        lineHeight: 15,
        marginRight: 8
    },
    contextInfo: {
        ...flex.row,
        ...align.center,
        width: '100%', 
        marginBottom: 8
    },
    contextDescriptionWrapper: {
        width: '100%', 
    },
    contextDescription: {
        color: '#000000',
        fontSize: IS_MONOBROW ? 14.5: 18,
        lineHeight: IS_MONOBROW ? 16: 18
    },

    // TODO: Create Separate Components
    actions: {
        paddingHorizontal: 12,
        paddingBottom: 8,
        paddingTop: 12
    },
    action: {
        ...flex.row,
        ...justify.spaceBetween,
        marginBottom: 8
    }
});

const propTypes = {
    data: PropTypes.any,
    containerStyle: PropTypes.any,
    onPress: PropTypes.func
};

const defaultProps = {
    data: {},
    containerStyle: {},
    onPress: null
};

const CardRedeem = (props: any) => {
    const { data, containerStyle, onPress }: any = props;
    
    return (
        <Pressable style={[styles.container, containerStyle]} onPress={onPress}>
            <View style={styles.wrapper}>

                <View style={styles.banner}>
                    <Image source={data.image} style={styles.image} />
                    <Image source={Images.gradient_black} fadeDuration={1} style={styles.gradient}/>
                </View>

                <View style={styles.context}>
                    <View style={styles.contextInfo}>
                        <View style={styles.contextWrapper}>
                            <Text label={'White recycled plastic market tote.'} 
                                lineLimit={2} type={'medium'} style={styles.contextTitle}/>
                        </View>
                    </View>
                    <View style={styles.contextDescriptionWrapper}>
                        <Text label={'100 pearls'} 
                            type={'semiBold'} style={styles.contextDescription}/>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

CardRedeem.propTypes = propTypes;
CardRedeem.defaultProps = defaultProps;

export default memo(CardRedeem);