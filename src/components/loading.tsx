/**
 *  
 *  Loading Component Usage
 * 
 *  import Loading from '../components/Loading';
 *  <Loading isVisible={true} isInline={true} color={'rgb(58, 58, 58, 0)'}/>
 * 
 */

import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, Modal } from 'react-native';
import PropTypes from 'prop-types';

// Global Styles 
import { layout, flex } from '../styles/global.styles';

const styles = StyleSheet.create({
    container: {
        ...layout.backdrop,
        ...flex.on,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

interface LoadingProps {
    isVisible: boolean,
    isInline: boolean,
    size: string,
    color: string
}

const propTypes = {
    isVisible: PropTypes.bool,
    isInline: PropTypes.bool,
    size: PropTypes.string,
    color: PropTypes.string
};

const defaultProps = {
    isVisible: true,
    isInline: true,
    size: 'small',
    color: '#FFF',
};

const Loading = (props: any) => {
    const { isVisible, isInline, size, color }:any = props;

    if (isInline && isVisible) {
        return (
            <ActivityIndicator size={size} color={color} />
        )
    } else {
        return(
            <Modal animationType="fade" transparent={true} visible={isVisible}>
                <View style={styles.container}>
                    <ActivityIndicator size={size} color={color}  />
                </View>
            </Modal>
        )
    }
}

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;
 
export default Loading; 