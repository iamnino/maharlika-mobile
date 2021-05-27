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
        width: '100%', 
    },
    wrapper: {
        borderRadius: 8,
        // paddingBottom: 12,
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },

    banner: {
        height: 65, 
        width: 65, 
        backgroundColor: '#E9E9E9',
        position: 'relative',
        overflow: 'hidden'
    },
    image: {
        height: 65, 
        width: 65, 
    },

    context: {
        width: '100%',
        // paddingTop: 12,
        // paddingHorizontal: 12,
        // paddingBottom: 12
    },
    avatar: {
        height: 40,
        width: 40,
        backgroundColor: '#ecf0f1',
        borderRadius: 50
    },
    contextWrapper: {
        paddingLeft: 10
    },
    contextMetaWrapper: {
        ...flex.row
    },
    contextTitle: {
        color: '#000000',
        fontSize: IS_MONOBROW ? 16: 18,
        lineHeight: 21
    },
    contextMeta: {
        color: '#6E6E6E',
        fontSize: IS_MONOBROW ? 12: 14,
        lineHeight: 18,
        marginRight: 8
    },
    contextInfo: {
        ...flex.row,
        ...align.center,
        width: '100%'
    },
    contextDescriptionWrapper: {
        width: '100%', 
    },
    contextDescription: {
        color: '#000000',
        fontSize: IS_MONOBROW ? 13.5: 16,
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

const CardActivity = (props: any) => {
    const { data, containerStyle, onPress }: any = props;
    
    return (
        <Pressable style={[styles.container, containerStyle]} onPress={onPress}>
            <View style={styles.wrapper}>

                <View style={styles.context}>
                    <View style={styles.contextInfo}>
                        <View style={styles.banner}>
                            <Image source={Images.post_1} style={styles.image} />
                        </View>
                        <View style={styles.contextWrapper}>
                            <Text label={'Coastal Watchers'} 
                                type={'semiBold'} style={styles.contextTitle}/>
                            <View style={styles.contextMetaWrapper}>
                                <Text label={'Coastal Bay Enthusiast'} 
                                    type={'medium'} style={styles.contextMeta}/>
                                <Text label={'1.8K members'} 
                                    type={'medium'} style={styles.contextMeta}/>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        </Pressable>
    )
}

CardActivity.propTypes = propTypes;
CardActivity.defaultProps = defaultProps;

export default memo(CardActivity);