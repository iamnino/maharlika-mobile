import PropTypes from 'prop-types';
import React, { useEffect, useState, memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { isIPhoneWithMonobrow } from 'react-native-status-bar-height';
import isEmpty from 'lodash/isEmpty';

const IS_MONOBROW = isIPhoneWithMonobrow();

// Global Styles
import { 
    flex, 
    justify, 
    bg, 
    font, 
    shadow, 
    align, 
    resizeMode, 
    color
} from '../../styles/global.styles';

// Icons
import PlusIcon from '../icons/plus';
// import BellIcon from '../icons/bell';

// Components
import Text from '../text';
import Tabs from '../tabs';

// Styles
const styles = StyleSheet.create({
    // TODO: Create Separate Components
    container: {
        width: '100%',
        paddingBottom: 12
    },
    wrapper: {
    },
    context: {
        ...flex.row,
        ...align.center,
        ...justify.spaceBetween,
        paddingHorizontal: 16,
        paddingTop: 5,
        paddingBottom: 8,
        // borderWidth: 1,
        // borderColor: 'red'
    },
    title: {
        fontSize: IS_MONOBROW ? 24: 29,
        marginRight: 12,
        textAlignVertical: 'bottom',
        color: '#16a085',
    },
    create: {
        ...flex.row,
        ...align.center
    },
    label: {
        color: '#95a5a6',
        fontSize: IS_MONOBROW ? 16: 18,
        marginLeft: 2
    }
});

const propTypes = {
    title: PropTypes.string,
    tabs: PropTypes.array,
    onPressCreate: PropTypes.func
};

const defaultProps = {
    title: '',
    tabs: [],
    onPressCreate: null
};

const HeaderNavigation = (props: any) => {
    const { title, tabs, onPressCreate } = props;
	return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.context}>
                    <Text label={title} type={'bold'} style={styles.title} />
                    { onPressCreate &&
                        <Pressable style={styles.create}>
                            <PlusIcon size={16} color={'#95a5a6'}/>
                            <Text label={'Create'} type={'medium'}
                                style={styles.label}/>
                        </Pressable>
                    }
                </View>
                { !isEmpty(tabs) &&
                    <Tabs data={tabs} />
                }
            </View>
        </View>
	)
};

HeaderNavigation.propTypes = propTypes;
HeaderNavigation.defaultProps = defaultProps;

export default memo(HeaderNavigation);