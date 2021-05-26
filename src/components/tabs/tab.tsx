import PropTypes from 'prop-types';
import React, { useEffect, useState, memo } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { isIPhoneWithMonobrow } from 'react-native-status-bar-height';

const IS_MONOBROW = isIPhoneWithMonobrow();

// Global Styles
import { flex } from '../../styles/global.styles';

// Components
import Text from '../text';

// Styles
const styles = StyleSheet.create({

    // TODO: Create Separate Components
    button: {
        marginRight: 15
    },
    label: {
        fontSize: IS_MONOBROW ? 16: 18,
        lineHeight: 21,
        textAlignVertical: 'bottom',
        opacity: 0.3,
        // paddingHorizontal: 3
    },
    active: {
        opacity: 1
    },
});

const propTypes = {
    label: PropTypes.string,
    style: PropTypes.any
};

const defaultProps = {
    label: '',
    style: {}
};

const Tab = (props: any) => {
    const { label, style } = props;

	return (
        <Pressable style={[styles.button, style]}>
            <Text label={label} type={'medium'} 
                style={{...styles.label}} />
        </Pressable>
	)
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default memo(Tab);