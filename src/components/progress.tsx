import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { isIPhoneWithMonobrow } from 'react-native-status-bar-height';
import PropTypes from 'prop-types';

// Global Styles
import { flex } from '../styles/global.styles';

const IS_MONOBROW = isIPhoneWithMonobrow();

// Components
import Text from '../components/text';

const styles = StyleSheet.create({ 
    container: {
        ...flex.column,
        width: '100%', 
    },
    wrapper: {
        width: '100%', 
        height: 8,
        backgroundColor: '#ecf0f1',
        borderRadius: 15,
        position: 'relative',
        overflow: 'hidden',
        marginTop: 5
    },
    label: {
        color: '#6E6E6E',
        fontSize: IS_MONOBROW ? 13: 16,
    },
    indicator: {
        position: 'absolute',
        height: '100%',
        width: '15%',
        borderRadius: 15,
        backgroundColor: '#08C643'
    }
});

const propTypes = {
    label: PropTypes.string,
    progress: PropTypes.string
};

const defaultProps = {
    label: '',
    progress: '0%'
};

const Progress = (props: any) => {
    const { label, progress }: any = props;
    return (
        <View style={styles.container}>
            <Text label={label} type={'medium'} 
                style={styles.label}/>
            <View style={styles.wrapper}>
                <View style={[styles.indicator, { width: progress }]} />
            </View>
        </View>
    )
}

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

export default Progress;
