import React, { useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import { align, bg, color, flex, justify } from '../../styles/global.styles';

// Icons
import SearchIcon from '../icons/search';
// import BellIcon from '../icons/bell';

// Components
import Text from '../text';
import { BackButton } from '../buttons';

// Styles
const styles = StyleSheet.create({
    container: {
        ...bg.white,
        ...flex.row,
        paddingTop: 10,
        paddingHorizontal: 18,
        // borderWidth: 1
    },
    wrapper: {
        ...flex.row,
        ...align.center,
        ...justify.spaceBetween,
        width: '100%',
        height: 40,
        // borderWidth: 1
    },
    content: {
        ...flex.row,
        ...align.center,
    },
    actions: {
        ...flex.row,
        ...align.center,
    },
    action: {
        position: 'relative',
        padding: 2
    },
    title: {
        fontSize: 29,
        color: '#282A2B'
    },
    spacer: {
        ...flex.row,
        width: 8,
        height: 18
    },
    indicator: {
        backgroundColor: '#FF375F',
        height: 5,
        width: 5,
        borderRadius: 5,
        position: 'absolute',
        right: 0
    }
});

const propTypes = {
    title: PropTypes.string,
    search: PropTypes.bool,
    back: PropTypes.bool,
    notification: PropTypes.bool,
    onPressSearch: PropTypes.func,
    onPressBack: PropTypes.func,
    onPressNotification: PropTypes.func,
    labelStyles: PropTypes.any
};

const defaultProps = {
    title: '',
    search: false,
    back: false,
    notification: false,
    onPressSearch: null,
    onPressBack: null,
    onPressNotification: null,
    labelStyles: {}
};

const HeaderNavigation = (props: any) => {

    const { 
        title, search, back, notification, 
        onPressSearch, onPressBack, onPressNotification,
        labelStyles
    } = props;

	return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.content}>
                    { back && <BackButton onPress={onPressBack}/> }
                    <Text label={title} type={'bold'} style={{...styles.title, ...labelStyles}}/>
                </View>
                <View style={styles.actions}>
                    { search && 
                        <Pressable onPress={onPressSearch} style={styles.action}>
                            <SearchIcon color={'#66666D'} width={24} height={24} />
                        </Pressable>
                    }
                    
                    {/* { search && notification && <View style={styles.spacer}/> }

                    { notification && 
                        <Pressable onPress={onPressNotification} style={styles.action}>
                            <View style={styles.indicator}/>
                            <BellIcon color={'#66666D'}/>
                        </Pressable>
                    } */}
                </View>
            </View>
        </View>
	)
};

HeaderNavigation.propTypes = propTypes;
HeaderNavigation.defaultProps = defaultProps;

export default React.memo(HeaderNavigation);