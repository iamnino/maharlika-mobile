import React, { useState } from 'react';
import { Pressable, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

// Screen Styles
import { styles, headerStyles, sellerStyles } from './styles';

// Components
import Text from '../../components/text';
import PostGrid from '../../components/post/grid';

// Icons
import BackIcon from '../../components/icons/back';

// Constants
import Images from '../../constants/images';

const posts: Array<any> = [
    { id: 'A2gmVRKy1Z', photo: Images.post_1, title: 'Samsung S20 5G with FREE Samsung Earbuds', price: 'PHP 29,500', location: 'Eastwood, Quezon City'  },
    { id: 'wqrgReRBgk', photo: Images.post_2, title: 'Huawei Mate 20', price: 'PHP 10,500', location: 'Marikina City'  },
    { id: 'NEFBJiMrJo', photo: Images.post_3, title: 'iPhone 11 64GB Green', price: 'PHP 15,800', location: 'Eastwood, Quezon City' },
    { id: 'htPFF50Ett', photo: Images.post_4, title: 'iPhone 8 Plus 64gb Factory Unlocked', price: 'PHP 15,800', location: 'Eastwood, Quezon City' },
    { id: '9scEHQRAhz', photo: Images.post_1, title: 'iPhone 8 Plus', price: 'PHP 13,500', location: 'Eastwood, Quezon City' },
    { id: 'gEqSGmYIcN', photo: Images.post_2, title: 'iPhone 8 Plus', price: 'PHP 13,500', location: 'Eastwood, Quezon City' },
];

const Post = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const navigatePush = (screen: string, params: any = {}) => {
        navigation.push(screen, params);
    }

    const goBack = () => {
        navigation.goBack();
    }

    const image = require(`../../../assets/images/posts/post-4-lg.png`);

    return (
        <SafeAreaView style={styles.safearea} edges={['bottom', 'left', 'right']}>
            <StatusBar style='dark'/>
            <View style={styles.layout}>
                <ScrollView 
                    stickyHeaderIndices={[0]} 
                    style={styles.scroll} 
                    bounces={false}>

                    <View style={headerStyles.container}>
                        <View style={headerStyles.wrapper}>
                            <Pressable style={headerStyles.back} onPress={goBack}>
                                <BackIcon color={'#FFFFFF'} width={24} height={24} />
                            </Pressable>
                        </View>
                    </View>
                    
                    <View style={styles.container}>
                        
                        <View style={styles.banner}>
                            <Image source={image} fadeDuration={1} style={styles.image}/>
                        </View>

                        <View style={styles.section}>

                            <View style={styles.info}>
                                <Text label={'Samsung S20 5G with FREE Samsung Earbuds'} type={'semiBold'} style={styles.title} />
                                <Text label={'PHP 25,000'} type={'bold'} style={styles.price} />
                            </View>

                            <View style={styles.metaDescription}>
                                <View style={styles.metaContainer}>
                                    <View style={styles.metaIcon}></View>
                                    <Text label={'Used - Like New'} type={'medium'} style={styles.meta} />
                                </View>
                                <View style={styles.metaContainer}>
                                    <View style={styles.metaIcon}></View>
                                    <Text label={'Within 8KM'} type={'medium'} style={styles.meta} />
                                </View>
                                <View style={styles.metaContainer}>
                                    <View style={styles.metaIcon}></View>
                                    <Text label={'6 mins ago'} type={'medium'} style={styles.meta} />
                                </View>
                            </View>

                            <View style={styles.description}>
                                <Text label={'Descriptions'} type={'bold'} style={styles.descriptionLabel} />

                                <Text label={`Samsung S20 5G with original Samsung Earbuds bought last June 2020 (still have warranty and receipt)

* Color: Cloud Navy
* Key Features: Space zoom, single taken, night mode, super smooth 120Hz, all-day intellegent battery, hyperfast processor.
* Inclusions: USB Cable Connector (Type C), Power Adapter and Ejector Pin.

Open for Meetups @ Eastwood, Quezon City or sent via Grab`} type={'medium'} style={styles.descriptionContent} />
                            </View>

                            <View style={sellerStyles.container}>
                                <Text label={'Seller Information'} type={'bold'} style={sellerStyles.title} />
                                <View style={sellerStyles.wrapper}>
                                    <View style={sellerStyles.content}>
                                        <View style={sellerStyles.avatar}>
                                            <Image source={Images.profile_7} fadeDuration={1} style={sellerStyles.image}/>
                                        </View>
                                        <View style={sellerStyles.context}>
                                            <Text label={'Sam Sebastian'} type={'semiBold'} style={sellerStyles.name} />
                                            <Text label={'21 posts'} type={'medium'} style={sellerStyles.posts} />
                                        </View>
                                    </View>
                                    <Pressable style={sellerStyles.follow}>
                                        <Text label={'View Profile'} type={'semiBold'} style={sellerStyles.followLabel}/>
                                    </Pressable>
                                </View>
                                <PostGrid data={posts} onPress={(post: any, index: any) => navigatePush('Post') }/>
                            </View>

                        </View>

                    </View>
                </ScrollView>
                <View style={styles.actions}>
                    <Pressable style={[styles.action]}>
                        <Text label={'Make Offer'} type={'semiBold'} style={styles.actionLabel}/>
                    </Pressable>
                    <View style={styles.spacer}/>
                    <Pressable style={[styles.action]}>
                        <Text label={'Chat Seller'} type={'semiBold'} style={styles.actionLabel}/>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Post;