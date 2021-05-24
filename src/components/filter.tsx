import React from 'react';
import { Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import { align, bg, flex, justify } from '../styles/global.styles';
import Text from '../components/text';

import Colors from '../constants/colors';

// Icons
import FilterIcon from '../components/icons/filter';

export const styles = StyleSheet.create({
    section: {}, 
    container: {
        ...flex.on,
        ...flex.row,
        ...bg.white,
        // minHeight: 45,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.03,
    },
    scroll: {
        // borderWidth: 1
    },
    wrapper: {
        ...flex.on,
        ...flex.row,
        ...align.center,
        paddingLeft: 18,
        paddingTop: 6,
        paddingBottom: 10
    },
    filter: {
        ...flex.on,
        ...align.center,
        ...justify.center,
        minHeight: 28,
        paddingHorizontal: 10,
        marginRight: 10,
        borderRadius: 15,
        backgroundColor: '#F2F2F2',
        // backgroundColor: '#007AFF'
    },
    filterEnd: {
        marginRight: 0
    },
    label: {
        fontSize: 15,
        color: '#282A2B'
    },
    actions: {
        ...flex.row,
        ...align.center,
        justifyContent: 'flex-end',
        paddingRight: 18,
        paddingLeft: 5,
        paddingTop: 6,
        paddingBottom: 12,
    },
    action: {
        ...flex.row,
        ...align.center
    },
    actionLabel: {
        fontSize: 18,
        color: '#8C8C91'
    }
});

const propTypes = {
    data: PropTypes.array,
    onPress: PropTypes.any,
    containerStyle: PropTypes.any,
    onPressFilter: PropTypes.func
};

const defaultProps = {
    data: [],
    onPress: null,
    containerStyle: {},
    onPressFilter: null
};

export const Pills = (props: any) => {

    const { data, pillStyles }:any = props;

    const pills = data.map((pill: any, index: any) => {

        let end:any = {};

        if(data.length === index + 1){
            end = styles.filterEnd;
        }

        return (
            <Pressable style={[styles.filter, end, pillStyles]} key={`pill-${index}-filter`} onPress={data.onPress}>
                <Text label={pill.label} type={'medium'} style={styles.label}/>
            </Pressable>
        )
    });

    return (
        <ScrollView 
            style={styles.scroll}
            bounces={false} 
            horizontal={true}>
            <View style={styles.wrapper}>
                { pills }
            </View>
        </ScrollView>
    )
}

const Filter = (props: any) => {
    const { data, onPress, containerStyle, onPressFilter } = props;
    
    const filters: Array<any> = [
        { id: '1', label: 'Within 8 kilometers', onPress: null },
        { id: '2', label: 'Eastwood City', onPress: null },
        { id: '3', label: 'Used - Like New', onPress: null },
        { id: '4', label: 'Smartphone', onPress: null }
    ];

    return (
        <View style={styles.section}>
            <View style={[styles.container, containerStyle]}>
                <Pills data={filters}/>
                <View style={styles.actions}>
                    <Pressable onPress={onPressFilter}>
                        <View style={styles.action}>
                            <FilterIcon width={24} height={24} color={'#66666D'} />
                            <Text label={'Filters'} type={'medium'} style={styles.actionLabel}/>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;