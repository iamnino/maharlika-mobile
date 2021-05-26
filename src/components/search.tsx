import React, { useState } from 'react';
import { Pressable, Text, View, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// Icons
import SearchIcon from '../components/icons/search';

import { 
    align, 
    flex, 
    font 
} from '../styles/global.styles';

export const styles = StyleSheet.create({
    container: {
        ...flex.on,
        ...flex.row,
        ...align.center,
    },
    wrapper: {
        ...flex.row,
        ...align.center,
        width: '100%',
        minHeight: 38,
        backgroundColor: '#F4F4F4',
        overflow: 'hidden',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 5
    },
    icon: {},
    textbox: {
        ...flex.on,
        ...flex.row,
        marginLeft: 8
    },
    input: {
        ...font.regular,
        width: '100%',
        fontSize: 18,
        lineHeight: 21
    }
});

const propTypes = {
    placeholder: PropTypes.string,
    containerStyle: PropTypes.any,
    onChangeText: PropTypes.func
};

const defaultProps = {
    placeholder: 'Search',
    containerStyle: {},
    onChangeText: null
};

const SearchInput = (props: any) => {
    const {placeholder, containerStyle, onChangeText}: any = props;
    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.wrapper}>
                <SearchIcon size={18} color={'#66666D'}/>
                <View style={styles.textbox}>
                    <TextInput 
                        style={styles.input}
                        // autoFocus={true}
                        placeholder={placeholder}
                        placeholderTextColor={'#66666D75'}
                        // placeholderTextColor
                        returnKeyType={'search'}
                        // returnKeyLabel={'Search'}
                        onChangeText={onChangeText}
                        // onSubmitEditing={() => { console.log('Search') }}
                        clearButtonMode={'while-editing'} />
                </View>
            </View>
        </View>
    )
}

SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;

export default SearchInput;