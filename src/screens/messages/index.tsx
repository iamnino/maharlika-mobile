import React, { useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

// Screen Styles
import { styles, chatStyles } from './styles';

// Components
import HeaderNavigation from '../../components/navigation/header';
import Text from '../../components/text';

// Contansts
import Images from '../../constants/images';

// Room Data
const data: Array<any> = [
    { id: 'A2gmVRKy1Z', username: 'Summer', message: 'Hello, how are you?', created: '1 min ago', photo: Images.profile_1},
    { id: 'wqrgReRBgk', username: 'Samantha', message: 'Hahaha, not funny!', created: '2 days ago', photo: Images.profile_2},
    { id: 'NEFBJiMrJo', username: 'Sophia', message: 'Okay, goodbye!', created: '2 days ago', photo: Images.profile_3},
    { id: 'htPFF50Ett', username: 'Jennifer', message: 'Where have you been?', created: '2 days ago', photo: Images.profile_4},
    { id: '9scEHQRAhz', username: 'Chloe', message: 'Chloe sent GIF', created: '3 days ago', photo: Images.profile_5},
    { id: 'gEqSGmYIcN', username: 'Olivia', message: 'You sent GIF', created: '5 days ago', photo: Images.profile_6},
    { id: 'mp4UpT4917', username: 'Nicole', message: 'Yes?', created: '1 week ago', photo: Images.profile_7},
    { id: 'rXPFF44917', username: 'Iya', message: 'Go ahead', created: '2 week ago', photo: Images.profile_1},
    { id: 'kaExC33a1X', username: 'April', message: 'Wait a second', created: '3 week ago', photo: Images.profile_2},
    { id: 'QRAhz33a1X', username: 'April', message: 'Wait a second', created: '3 week ago', photo: Images.profile_3},
    { id: 'kaQRAhza1X', username: 'April', message: 'Wait a second', created: '3 week ago', photo: Images.profile_4},
    { id: 'kQRAhz3a1X', username: 'April', message: 'Wait a second', created: '3 week ago', photo: Images.profile_5}
];

const Messages = (props: any) => {
    const navigate = (screen: string, params: any = {}) => {
        const { navigation }: any = props;
        navigation.navigate(screen, params);
    }

    const onPress = (params: any = {}) => {
        navigate('Chat', params);
    }

    return (
        <SafeAreaView style={styles.safearea} edges={['top']}>
            <View style={styles.layout}>
                <ScrollView 
                    stickyHeaderIndices={[0]} 
                    style={styles.scroll} 
                    bounces={false}>
                    <HeaderNavigation title={'Messages'} search={true} />
                    <View style={styles.container}>
                        <View style={chatStyles.container}>
                            {
                                data.map((data, index) => {
                                    const { id, username, message, photo, created } = data;

                                    return (
                                        <Pressable key={`chat-${id}`} style={chatStyles.wrapper} 
                                            onPress={() => onPress()}>
                                            <View style={chatStyles.content}>
                                                <View style={chatStyles.photo}>
                                                    <Image source={photo} fadeDuration={1} style={chatStyles.photoImage}/>
                                                </View>
                                                <View style={chatStyles.context}>
                                                    <View>
                                                        <Text label={username} type={'semiBold'} style={chatStyles.name}/>
                                                        <Text label={message} type={'medium'} style={chatStyles.message}/>
                                                    </View>
                                                    <View>
                                                        <Text label={created} type={'regular'} style={chatStyles.time}/>
                                                    </View>
                                                </View>
                                            </View>
                                        </Pressable>
                                    )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Messages;