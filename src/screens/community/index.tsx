import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Pressable, TextInput, View } from 'react-native';

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';
import Header from '../../components/navigation/header';
import CardCommunity from '../../components/card/community';

const Community = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    // States
    const [data, setData] = useState([{ id: '1' }, { id: '2' }, { id: '3' }]);

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const renderItem = ({ item, index }: any) => {
        let style: any = { marginBottom: 15 };

        if(data.length === index + 1) {
            style = {} 
        }

        const onPress = () => {
            navigate('Event::Details', item);
        }

        return (
            <CardCommunity 
                containerStyle={style}
                onPress={onPress}
            />
        )
    }

    const onPressCreate = () => {
        console.log('Press Create');
    }

    return (
        <SafeAreaView style={styles.safearea} edges={['top']}>
            <View style={styles.layout}>
                <Header 
                    title={'Community'} 
                    containerStyle={styles.header} 
                    onPressCreate={onPressCreate}
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

export default Community;
