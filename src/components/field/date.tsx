import React from 'react';
import { TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Datepicker } from '@ui-kitten/components';

// Components
import Text from '../text';

// Global Styles
import { align, flex, shadow } from '../../styles/global.styles';

export const styles = StyleSheet.create({
    field: {
        ...flex.column,
        width: '100%',
        // height: 80,
        marginBottom: 15,
    },
    row: {
        ...shadow.card,
        paddingTop: 5,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
    },
    date: {
        backgroundColor: '#FFFFFF',
        borderWidth: 0
    },
    label: {
        fontSize: 18,
        marginBottom: 8
    }
});

const propTypes = {
    label: PropTypes.string,
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
    placeholder: '',
    value: '',
    onSelect: null,
    dateStyle: {},
    enabled: false
};

const FieldDate = (props: any) => {
    const { 
        label, 
        placeholder, 
        value, 
        onSelect, 
        dateStyle,
        enabled
    } = props;

    return (
        <View style={[styles.field, { opacity: enabled ? 1: 0.3 }]}>
            <Text label={label} style={styles.label} type={'semiBold'} />
            <View style={styles.row}>
                <Datepicker
                    status={'success'}
                    controlStyle={[styles.date, dateStyle]} 
                    date={value}
                    placeholder={placeholder}
                    onSelect={onSelect}
                />
            </View>
        </View>
    )
}

FieldDate.propTypes = propTypes;
FieldDate.defaultProps = defaultProps;

export default FieldDate;