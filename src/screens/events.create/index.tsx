import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GiftedChat, IMessage, MessageProps } from 'react-native-gifted-chat'

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';

const EventCreate = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    return (
        <SafeAreaView style={styles.safearea} edges={['top']}>
            <View style={styles.layout}>
                {/* <Text label={'EventCreate View'} /> */}

                <View style={styles.container}>
                    <View style={styles.card}>
                    </View>
                </View>
                
            </View>
        </SafeAreaView>
    )
}

export default EventCreate;
