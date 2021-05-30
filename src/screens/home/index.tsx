import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Pressable, TextInput, View } from 'react-native';

// Screen Styles
import styles from './styles';

// Components
import Text from '../../components/text';
import Header from '../../components/navigation/header';
import CardEvent from '../../components/card/event';

// Constants
import Images from '../../constants/images';

// Utils
import { generateID } from '../../helpers/utils.helper';

const Home = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    // States
    const [activeTabIndex, setActiveTabIndex] = useState('all');

    const [data, setData] = useState([
        { 
            id: generateID(), 
            creator_name: 'City of Manila',
            start: 'Thursday, March 23, 2021',
            banner: Images.feed_4,
            description: `Weekly Coastal Clean-up ⛱\nJoin our volunteer and get FREE grocery basket.\nLimited to 100 slots only.`
        },
        { 
            id: generateID(), 
            creator_name: 'Barangay Addition Hills',
            start: 'Thursday, January 14, 2021',
            banner: Images.feed_3,
            description: `Regular weekly cleanup drive is held at Maytunas Creek and other areas as part of their commitment to the Manila Bay Rehabilitation Program.`
        },
        { 
            id: generateID(), 
            creator_name: 'City of Cebu',
            start: 'Monday, May 30 at 8AM',
            banner: Images.feed_1,
            description: `The event was organized as for part of Cebu’s efforts to address plastic pollution. `
        },
        { 
            creator_name: 'City of Tacloban',
            id: generateID(), 
            start: 'Monday, May 30 at 8AM',
            banner: Images.feed_2,
            description: `MORE than 700 volunteers from all walks of life showed up on Sunday, February 3, for a massive cleanup drive along the coastal and riverbank areas in Tacloban City.`
        }
    ]);

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const tabs = [
        { id: generateID(), key: 'all', label: 'All' },
        { id: generateID(), key: 'clean-up-drive', label: 'Clean-up Drive' },
        { id: generateID(), key: 'drive-3R', label: '3R Drive' },
        { id: generateID(), key: 'community-pantry', label: 'Community Pantry' },
        { id: generateID(), key: 'covid-19-update', label: 'COVID-19 Update' },
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
            // navigate('Event::Details', item);
        }

        return (
            <CardEvent 
                data={item}
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
