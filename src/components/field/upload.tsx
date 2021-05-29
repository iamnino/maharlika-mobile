import React from 'react';
import { Image, Pressable, View } from 'react-native';
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
        height: 165,
        overflow: 'hidden',
        position: 'relative'
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
    image: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        // borderWidth: 1,
        // borderColor: 'red',
        // backgroundColor: 'red'
    },
    link: {
      
    },
    picker: {
        zIndex: 1,
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: '#00000005',
        borderRadius: 50
    },
    small: {
        fontSize: 16,
        color: '#00000085',
    },
});

const propTypes = {
    label: PropTypes.string,
    sub: PropTypes.string,
    placeholder: PropTypes.string,
    uri: PropTypes.any,
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
    uri: null,
    onSelect: null,
    dateStyle: {},
    enabled: false
};

const FieldUpload = (props: any) => {
    const { 
        label, 
        sub, 
        placeholder, 
        uri, 
        onSelect, 
        dateStyle,
        enabled
    } = props;

    return (
        <View style={[styles.field, { opacity: enabled ? 1: 0.3 }]}>
            <Text label={label} style={styles.label} type={'semiBold'} />
            <Text label={sub} style={styles.sub} type={'semiBold'} />

            <View style={styles.row}>
                <Pressable style={styles.placeholder} onPress={onSelect}>
                    {  !uri && 
                        <View style={styles.picker}>
                            <Text label={'Choose Image'} style={styles.small} type={'medium'} />
                        </View>
                    }
                    <Image source={{ uri: uri }} style={styles.image} />
                </Pressable>
            </View>
        </View>
    )
}

FieldUpload.propTypes = propTypes;
FieldUpload.defaultProps = defaultProps;

export default FieldUpload;