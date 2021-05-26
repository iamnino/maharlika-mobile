import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Pressable, View } from 'react-native';

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';
import Header from '../../components/navigation/header';
import CardEvent from '../../components/card/event';

// Constants
import Images from '../../constants/images';

const Events = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const data = [
        {id: '1'},
        {id: '2'},
        {id: '3'},
        {id: '4'},
        {id: '5'},
    ];

    const tabs = [
        { id: '1', label: 'All' },
        { id: '2', label: 'Recently Added' },
        { id: '3', label: 'Upcoming' },
        { id: '4', label: 'Completed' },
        { id: '5', label: 'Redeem' },
    ]

    const renderItem = ({ item, index }: any) => {
        let style: any = { marginBottom: 15 };

        if(data.length === index + 1) {
            style = {} 
        }

        const onPress = () => {
            console.log(item);
            navigate('Event::Details', item);
        }

        return (
            <CardEvent 
                containerStyle={style}
                onPress={onPress}
            />
        )
    }

    return (
        <SafeAreaView style={styles.safearea} edges={['top']}>
            <View style={styles.layout}>
                <Header title={'Events'} tabs={tabs} />
                <FlatList
                    contentContainerStyle={styles.container}
                    scrollEnabled={true}
                    data={data}
                    renderItem={renderItem}
                />
            </View>
        </SafeAreaView>
    )
}

export default Events;
