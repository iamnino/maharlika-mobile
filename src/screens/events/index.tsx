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

    // States
    const [activeTabIndex, setActiveTabIndex] = useState('all');
    const [data, setData] = useState([{ id: '1' }, { id: '2' }, { id: '3' }]);

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const tabs = [
        { id: '1', key: 'all', label: 'All' },
        { id: '2', key: 'recently-added', label: 'Recently Added' },
        { id: '3', key: 'upcoming', label: 'Upcoming' },
        { id: '4', key: 'completed', label: 'Completed' },
        { id: '5', key: 'redeem', label: 'Redeem' },
    ]

    const renderItem = ({ item, index }: any) => {
        let style: any = { marginBottom: 15 };

        if(data.length === index + 1) {
            style = {} 
        }

        const onPress = () => {
            navigate('Event::Details', item);
        }

        return (
            <CardEvent 
                containerStyle={style}
                onPress={onPress}
            />
        )
    }

    const onPressCreate = () => {
        navigate('Event::Create');
    }

    useEffect(() => {
        tabs.forEach(tab => {
            const isActive:boolean = activeTabIndex === tab.key;
            if(isActive){
                // NOTE: Set API
            }
        });
    }, [activeTabIndex]);

    return (
        <SafeAreaView style={styles.safearea} edges={['top']}>
            <View style={styles.layout}>
                <Header 
                    title={'Events'} 
                    tabs={tabs}
                    activeIndex={activeTabIndex}
                    onPressCreate={onPressCreate}
                    onPressTab={setActiveTabIndex}
                />
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
