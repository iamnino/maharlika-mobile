import React, { memo } from 'react';
import { Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { isIPhoneWithMonobrow } from 'react-native-status-bar-height';

const IS_MONOBROW = isIPhoneWithMonobrow();

// Components
import Text from '../text';

// Global Styles
import { align, flex, shadow, justify } from '../../styles/global.styles';

export const styles = StyleSheet.create({
    button: {
        ...flex.row,
        ...align.center,
        ...justify.center,
        ...shadow.card,
        width: '100%',
        height: 50,
        borderRadius: 25,
        backgroundColor: '#D2D2D2'
    },
    active: {},
    label: {
        fontSize: IS_MONOBROW ? 16: 21,
        color: '#FFF'
    },
});

const propTypes = {
    label: PropTypes.string,
    containerStyle: PropTypes.any,
    labelStyle: PropTypes.any,
    onPress: PropTypes.func
};

const defaultProps = {
    label: {},
    containerStyle: {},
    labelStyle: {},
    onPress: null
};

const ButtonAction = (props: any) => {
    const { label, containerStyle, labelStyle, onPress }: any = props;
    return (
        <Pressable 
            style={[styles.button, containerStyle]}
            onPress={onPress}>
            <Text 
                label={label} 
                style={{...styles.label, ...labelStyle}}
                type={'semiBold'}
            />
        </Pressable>
    )
}

ButtonAction.propTypes = propTypes;
ButtonAction.defaultProps = defaultProps;

export default ButtonAction;