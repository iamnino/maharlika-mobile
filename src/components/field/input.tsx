import React from 'react';
import { TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// Components
import Text from '../text';

// Global Styles
import { flex, shadow } from '../../styles/global.styles';

export const styles = StyleSheet.create({
    field: {
        ...flex.column,
        width: '100%',
        // height: 80,
        marginBottom: 18,
    },
    row: {
        ...shadow.card,
        borderRadius: 10,
        backgroundColor: '#FFFFFF'
    },
    input: {
        fontSize: 18,
        lineHeight: 21,
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 15,
   
    },
    label: {
        fontSize: 18,
        marginBottom: 12
    }
});

const propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    onInputChange: PropTypes.func,
    multiline: PropTypes.bool,
    numberOfLines: PropTypes.number,
    inputStyle: PropTypes.any,
    enabled: PropTypes.bool,
    secure: PropTypes.bool
};

const defaultProps = {
    label: '',
    placeholder: '',
    value: '',
    onInputChange: null,
    multiline: false,
    numberOfLines: 1,
    inputStyle: {},
    enabled: false,
    secure: false
};

const FieldInput = (props: any) => {
    const { 
        label, 
        placeholder, 
        value, 
        onInputChange, 
        multiline, 
        numberOfLines,
        inputStyle,
        enabled,
        secure
    } = props;

    return (
        <View style={[styles.field, { opacity: enabled ? 1: 0.3 }]}>
            <Text label={label} style={styles.label} type={'semiBold'} />
            <View style={styles.row}>
                <TextInput 
                    multiline={multiline}
                    style={[styles.input, inputStyle]}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onInputChange}
                    numberOfLines={numberOfLines}
                    editable={enabled}
                    secureTextEntry={secure}
                />
            </View>
        </View>
    )
}

FieldInput.propTypes = propTypes;
FieldInput.defaultProps = defaultProps;

export default FieldInput;