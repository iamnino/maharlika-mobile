import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GiftedChat, IMessage, MessageProps } from 'react-native-gifted-chat'

// Screen Styles
import styles from './styles';

// Components
import Text from '../../components/text';
import Header from '../../components/navigation/header';

const Home = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const tabs = [
        { id: '1', label: 'All' },
        { id: '2', label: 'COVID-19 Update' },
        { id: '3', label: 'Clean-up Drive' },
        { id: '4', label: '3R Drive' },
        { id: '5', label: 'Community Pantry' },
    ]

    return (
        <SafeAreaView style={styles.safearea} edges={['top']}>
            <View style={styles.layout}>
                <Header title={'News Feed'} tabs={tabs} />
            </View>
        </SafeAreaView>
    )
}

export default Home;
