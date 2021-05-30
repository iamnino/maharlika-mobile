import React, { useState, useEffect } from 'react';
import { TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Select, SelectItem } from '@ui-kitten/components';

// Components
import Text from '../text';

// Lodash
import isUndefined from 'lodash/isUndefined';

// Global Styles
import { flex, shadow } from '../../styles/global.styles';

export const styles = StyleSheet.create({
    field: {
        ...flex.column,
        width: '100%',
        // height: 80,
        marginBottom: 15,
    },
    wrapper: {
        // ...shadow.card,
        // paddingTop: 5,
        // borderRadius: 10,
        // backgroundColor: '#FFFFFF',
    },
    row: {
        ...flex.row,
        marginBottom: 12
    },
    date: {
        backgroundColor: '#FFFFFF',
        borderWidth: 0
    },
    label: {
        fontSize: 18,
        marginBottom: 8
    },
    select: {
        width: '100%',
        // borderWidth: 1,
        // borderColor: 'red',
        ...shadow.card,
        backgroundColor: '#FFFFFF',
        marginBottom: 12

    },
    item: {
        backgroundColor: '#FFFFFF',
    }
});

const propTypes = {
    data: PropTypes.any,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    onSelect: PropTypes.func,
    multiline: PropTypes.bool,
    numberOfLines: PropTypes.number,
    inputStyle: PropTypes.any,
    enabled: PropTypes.bool,
    secure: PropTypes.bool
};

const defaultProps = {
    data: [],
    label: '',
    placeholder: '',
    value: '',
    onSelect: null,
    multiline: false,
    numberOfLines: 1,
    inputStyle: {},
    enabled: false,
    secure: false
};

const FieldDropdown = (props: any) => {
    const { 
        data,
        label, 
        placeholder, 
        value, 
        onSelect,
        onInputChange, 
        multiline, 
        numberOfLines,
        inputStyle,
        enabled,
        secure
    } = props;


    const renderItem = (data: any) => {
        return (
            <SelectItem 
                style={styles.item} 
                title={data.title}
                key={data.id}
            />
        )    
    }

     // Local States
     const [_scope, _setScope] = useState<any>('Select Scope');

     useEffect(() => {
         if(!isUndefined(data[value.row])) {
             _setScope(data[value.row].title);
         }
     }, [value]);
    
    return (
        <View style={[styles.field, { opacity: enabled ? 1: 0.3 }]}>
            <Text label={label} style={styles.label} type={'semiBold'} />
            <View style={styles.row}>
                <Select 
                    selectedIndex={value}
                    onSelect={onSelect}
                    style={styles.select} 
                    size='medium' 
                    placeholder={'Region'}
                    value={_scope}>
                    { data.map(renderItem) }
                </Select>
            </View>
        </View>
    )
}

FieldDropdown.propTypes = propTypes;
FieldDropdown.defaultProps = defaultProps;

export default FieldDropdown;