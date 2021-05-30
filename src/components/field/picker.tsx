import React, { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
// import { Datepicker } from '@ui-kitten/components';
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
    input: {
        fontSize: 18,
        lineHeight: 21,
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 15,
    },
    label: {
        fontSize: 18,
        marginBottom: 8
    },
    press: {
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
});

const propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    onSelect: PropTypes.func,
    multiline: PropTypes.bool,
    numberOfLines: PropTypes.number,
    inputStyle: PropTypes.any,
    enabled: PropTypes.bool,
    mode: PropTypes.string,
    minDate: PropTypes.any,
    maxDate: PropTypes.any,
};

const defaultProps = {
    label: '',
    placeholder: '',
    value: '',
    onSelect: null,
    inputStyle: {},
    enabled: false,
    mode: 'datetime',
    minDate: null,
    maxDate: null,
};

const FieldPicker = (props: any) => {
    const { 
        label, 
        placeholder, 
        value, 
        onSelect, 
        inputStyle,
        enabled,
        mode,
        minDate,
        maxDate
    } = props;

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        onSelect(date);
        hideDatePicker();
    };

    return (
        <View style={[styles.field, { opacity: enabled ? 1: 0.3 }]}>
            <Text label={label} style={styles.label} type={'semiBold'} />
            <View style={styles.row}>
                <Pressable onPress={showDatePicker} style={styles.press} />
                <TextInput 
                    style={[styles.input, inputStyle]}
                    placeholder={placeholder}
                    value={`${value}`}
                    editable={false}
                />
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode={mode}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                minimumDate={minDate}
                maximumDate={maxDate}
            />
        </View>
    )
}

FieldPicker.propTypes = propTypes;
FieldPicker.defaultProps = defaultProps;

export default FieldPicker;