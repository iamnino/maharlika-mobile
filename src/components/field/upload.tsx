import React from 'react';
import { TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Datepicker } from '@ui-kitten/components';

// Components
import Text from '../text';

// Global Styles
import { align, flex, justify, shadow } from '../../styles/global.styles';

export const styles = StyleSheet.create({
    field: {
        ...flex.column,
        width: '100%',
        // height: 80,
        marginBottom: 15,
    },
    row: {
        ...flex.row,
        ...justify.spaceBetween,
    },
    placeholder: {
        ...flex.on,
        ...justify.center,
        ...align.center,
        ...shadow.card,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        height: 100
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    sub: {
        fontSize: 14,
        color: '#00000065',
        marginBottom: 12,

    },
    small: {
        fontSize: 18,
        color: '#00000040',
    },
    separator: {
        width: '5%'
    }
});

const propTypes = {
    label: PropTypes.string,
    sub: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    onSelect: PropTypes.func,
    multiline: PropTypes.bool,
    numberOfLines: PropTypes.number,
    dateStyle: PropTypes.any,
    enabled: PropTypes.bool,
};

const defaultProps = {
    label: '',
    sub: '',
    placeholder: '',
    value: '',
    onSelect: null,
    dateStyle: {},
    enabled: false
};

const FieldUpload = (props: any) => {
    const { 
        label, 
        sub, 
        placeholder, 
        value, 
        onSelect, 
        dateStyle,
        enabled
    } = props;

    return (
        <View style={[styles.field, { opacity: enabled ? 1: 0.3 }]}>
            <Text label={label} style={styles.label} type={'semiBold'} />
            <Text label={sub} style={styles.sub} type={'semiBold'} />

            <View style={styles.row}>
                <View style={styles.placeholder}>
                    <Text label={'Front'} style={styles.small} type={'medium'} />
                </View>
                <View style={styles.separator} />
                <View style={styles.placeholder}>
                    <Text label={'Back'} style={styles.small} type={'medium'} />
                </View>
            </View>
        </View>
    )
}

FieldUpload.propTypes = propTypes;
FieldUpload.defaultProps = defaultProps;

export default FieldUpload;