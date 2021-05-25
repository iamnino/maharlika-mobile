import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, Pressable, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GiftedChat, IMessage, MessageProps } from 'react-native-gifted-chat'

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';

// Constants
import Images from '../../constants/images';

const Events = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const [activeTab, setActiveTab] = useState<string>('all');

    const activeTabStyle = (key: string) => {
        return activeTab === key ? styles.tabActive: {};
    }

    return (
        <SafeAreaView style={styles.safearea} edges={['top']}>
            <View style={styles.layout}>

                <View style={styles.headerContainter}>
                    <View style={styles.headerWrapper}>
                        <View style={styles.headerBrand} />
                        <Text label={'Events'} type={'bold'} 
                            style={styles.headerTitle} />

                        <View style={styles.tabContainer}>
                            <View style={styles.tabWrapper}>
                                <Pressable style={styles.tab} onPress={() => setActiveTab('all')}>
                                    <Text label={'All'} type={'medium'} 
                                        style={{...styles.tabLabel, ...activeTabStyle('all') }} />
                                </Pressable>
                                <Pressable style={styles.tab} onPress={() => setActiveTab('recent')}>
                                    <Text label={'Recently Added'} type={'medium'} 
                                        style={{...styles.tabLabel, ...activeTabStyle('recent') }} />
                                </Pressable>
                                <Pressable style={styles.tab} onPress={() => setActiveTab('upcoming')}>
                                    <Text label={'Upcoming'} type={'medium'} 
                                        style={{...styles.tabLabel, ...activeTabStyle('upcoming') }} />
                                </Pressable>
                                <Pressable style={styles.tab} onPress={() => setActiveTab('completed')}>
                                    <Text label={'Completed'} type={'medium'} 
                                        style={{...styles.tabLabel, ...activeTabStyle('completed') }} />
                                </Pressable>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.container}>

                    <View style={styles.card}>
                        <View style={styles.cardWrapper}>

                            <View style={styles.cardImageWrapper}>
                                <Image source={Images.post_1} style={styles.cardImage} />
                                <Image source={Images.gradient_black} fadeDuration={1} style={styles.cardImageGradient}/>
                            </View>
                            <View style={styles.cardContext}>
                                <View style={styles.cardContextInfo}>
                                    <View style={styles.cardContextAvatar}/>
                                    <View style={styles.cardContextWrapper}>
                                        <Text label={'Manila City Official'} 
                                            type={'semiBold'} style={styles.cardContextTitle}/>
                                        <View style={styles.cardContextMetaWrapper}>
                                            <Text label={'Monday, May 30 at 8AM'} 
                                                type={'medium'} style={styles.cardContextMeta}/>
                                            <Text label={'Manila Bay Coast'} 
                                                type={'medium'} style={styles.cardContextMeta}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.cardContextDescriptionWrapper}>
                                    <Text label={'Weekly Coastal Clean-up ⛱.\nJoin our volunteer and get FREE grocery basket.\nLimited to 100 slots only.'} 
                                        type={'medium'} style={styles.cardContextDescription}/>
                                </View>
                            </View>
                            <View style={styles.cardActions}>

                                <View style={styles.cardAction}>
                                    <View style={styles.progressContainer}>
                                        <Text label={'67 slots left'} type={'medium'} 
                                            style={styles.progressLabel}/>
                                        <View style={styles.progressWrapper}>
                                            <View style={[styles.progressIndicator, { width: '45%' }]} />
                                        </View>
                                    </View>

                                    <Pressable style={styles.cardActionButton}>
                                        <Text label={'Join'} type={'medium'} 
                                            style={styles.cardActionButtonLabel}/>
                                    </Pressable>
                                </View>

                            </View>
                        </View>
                    </View>

                </View>
                
            </View>
        </SafeAreaView>
    )
}

export default Events;
