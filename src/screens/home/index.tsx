import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Pressable, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GiftedChat, IMessage, MessageProps } from 'react-native-gifted-chat'

// Screen Styles
import styles from './styles';

// Components
import Text from '../../components/text';
import Header from '../../components/navigation/header';
import CardEvent from '../../components/card/event';

const Home = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    // States
    const [activeTabIndex, setActiveTabIndex] = useState('all');
    const [data, setData] = useState([{id: '1'}]);

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const tabs = [
        { id: '1', key: 'all', label: 'All' },
        { id: '2', key: 'covid-19-update', label: 'COVID-19 Update' },
        { id: '3', key: 'clean-up-drive', label: 'Clean-up Drive' },
        { id: '4', key: 'drive-3R', label: '3R Drive' },
        { id: '5', key: 'community-pantry', label: 'Community Pantry' },
    ]

    useEffect(() => {
        tabs.forEach(tab => {
            const isActive:boolean = activeTabIndex === tab.key;
            if(isActive){
                // NOTE: Set API
            }
        });
    }, [activeTabIndex]);

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

    return (
        <SafeAreaView style={styles.safearea} edges={['top']}>
            <View style={styles.layout}>
                <Header 
                    title={'News Feed'} 
                    tabs={tabs} 
                    activeIndex={activeTabIndex}
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

export default Home;
