import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, Pressable, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GiftedChat, IMessage, MessageProps } from 'react-native-gifted-chat'

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';
import Progress from '../../components/progress';
import Tabs from '../../components/tabs';
import { Action, BackButton } from '../../components/buttons';

// Constants
import Images from '../../constants/images';

const EventDetails = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const goBack = () => {
        navigation.goBack();
    }

    const tabs = [
        { id: '1', label: 'About' },
        { id: '2', label: 'Participant' },
    ]

    return (
        <View style={styles.safearea}>
            <ScrollView style={styles.layout}>
                <View style={styles.container}>

                    <View style={styles.header}>
                        <BackButton onPress={goBack} />
                    </View>

                    <View style={styles.banner}>
                        <Image source={Images.post_1} style={styles.image} />
                        <Image source={Images.gradient_black} fadeDuration={1} style={styles.gradient}/>
                    </View>

                    <View style={[styles.wrapper, { marginBottom: 16 }]}>
                        <View style={styles.context}>
                            <View style={styles.contextInfo}>
                                <View style={styles.avatar}/>
                                <View style={styles.contextWrapper}>
                                    <Text label={'Manila City Official'} 
                                        type={'semiBold'} style={styles.contextTitle}/>
                                    <View style={styles.contextMetaWrapper}>
                                        <Text label={'Monday, May 30 at 8AM'} 
                                            type={'medium'} style={styles.contextMeta}/>
                                        <Text label={'Manila Bay Coast'} 
                                            type={'medium'} style={styles.contextMeta}/>
                                    </View>
                                </View>
                            </View>
                            
                        </View>

                        <View style={styles.actions}>
                            <View style={styles.action}>
                                <Progress label={'65 slots left'} progress={'40%'} />
                                <Action label={'Join'}/>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.wrapper]}>
                        <Tabs data={tabs} containerStyle={styles.tabs}/>
                        <View style={styles.tab}>

                            <View style={styles.context}>
                                <View style={[styles.contextDescriptionWrapper, { marginBottom: 12 }]}>
                                    <Text label={'Weekly Coastal Clean-up.\nJoin our volunteer and get FREE grocery basket.\nLimited to 100 slots only.'} 
                                        type={'medium'} style={styles.contextDescription}/>
                                </View>

                                <View style={[styles.contextDescriptionWrapper, { marginBottom: 12 }]}  >
                                    <Text label={'Date and time'} 
                                        type={'semiBold'} style={styles.contextDescription}/>
                                    <Text label={'Monday, May 30, 2021\n8AM to 12PM'} 
                                        type={'medium'} style={styles.contextDescription}/>
                                </View>

                                <View style={[styles.contextDescriptionWrapper, { marginBottom: 12 }]}  >
                                    <Text label={'Location'} 
                                        type={'semiBold'} style={styles.contextDescription}/>
                                    <Text label={'Roxas Blvd, Malate, Manila, 1004 Metro Manila'} 
                                        type={'medium'} style={styles.contextDescription}/>
                                </View>
                            </View>

                        </View>
                    </View>
                    
                </View>
            </ScrollView>
        </View>
    )
}

export default EventDetails;
