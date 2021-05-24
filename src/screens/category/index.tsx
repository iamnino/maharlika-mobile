import React, { useState } from 'react';
import { ImageBackground, FlatList, Pressable, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

// Screen Styles
import { styles, sectionStyles, headerStyles } from './styles';

// Components
import Text from '../../components/text';
import PostGrid from '../../components/post/grid';
import SearchInput from '../../components/search';

// Constants
import Images from '../../constants/images';

// Dummy Data
import posts from '../../data/posts';

// Icons
import BackIcon from '../../components/icons/back';

const Category = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const goBack = () => {
        navigation.goBack();
    }

    const types = [
        { id: 'A2gmVRKy1Z', label: 'Makeup', gradient: ['#40C042', '#7DE4A8'], banner: Images.banner_small_makeup },
        { id: 'wqrgReRBgk', label: 'Skin Care', gradient: ['#0CA7DF', '#22CCD4'], banner: Images.banner_small_skincare },
        { id: 'gEqSGmYIcN', label: `Hair Care`, gradient: ['#4B78FC', '#44B1FE'], banner: Images.banner_small_makeup },
        { id: 'NEFBJiMrJo', label: `Fragrance`, gradient: ['#FF336C', '#FD7B45'], banner: Images.banner_small_makeup },
        { id: 'htPFF50Ett', label: 'Foot, Hand & Nail Care', gradient: ['#FF4425', '#FE7030'], banner: Images.banner_small_makeup },
        { id: 'mp4UpT4917', label: 'Tools & Accessories', gradient: ['#367BFF', '#71B3FF'], banner: Images.banner_small_makeup },
        { id: '9scEHQRAhz', label: 'Shave & Hair Removal', gradient: ['#926AF8', '#E07BFF'], banner: Images.banner_small_makeup },
        { id: 'rXPFF44917', label: 'Personal Care', type: 'lists', gradient: ['#FA6400', '#FD9D00'], banner: Images.banner_small_makeup },
        { id: 'htPFUpT4917', label: 'Oral Care', gradient: ['#0CA7DF', '#22CCD4'], banner: Images.banner_small_makeup },
    ];

    const renderTypes = ({ item, index }: any) => {
        let end = {};

        if(types.length === index + 1){
            end = { marginRight: 0 };
        }

        return (
            <View style={[{ position: 'relative', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', height: 50, width: 130, marginRight: 12, backgroundColor: '#F2F2F2', borderRadius: 8 }, end]}>
                <Image source={item.banner} fadeDuration={1} style={{ resizeMode: 'cover', height: '100%', width: '100%', position: 'absolute' }}/>
                <LinearGradient colors={item.gradient} start={{x: 1, y: 1}} end={{x: 1, y: 0}} style={{ height: '100%', width: '100%', position: 'absolute', opacity: 0.5 }} />
                <Image source={Images.gradient_black} fadeDuration={1} style={{ resizeMode: 'cover', height: '100%', width: '100%', position: 'absolute', bottom: 0, opacity: 0.25  }}/>
                <Text label={item.label} type={'medium'} style={{ color: '#FFF', fontSize: 16, textAlign: 'center', maxWidth: '80%' }}/>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.safearea} edges={['bottom', 'left', 'right']}>
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
                            <Image source={params.banner} fadeDuration={1} style={styles.bannerImage}/>
                            <View style={styles.bannerWrapper}>
                                <Text label={'Fresh Finds'} type={'semiBold'} style={styles.bannerSubTitle}/>
                                <Text label={params.label} type={'bold'} style={styles.bannerTitle}/>
                            </View>
                            <Image source={Images.gradient_black} fadeDuration={1} style={styles.bannerGradient}/>
                        </View>

                        <View style={{ paddingHorizontal: 10, paddingTop: 12 }}>
                            <SearchInput />
                        </View>

                        <FlatList
                            contentContainerStyle={styles.horizontalScroll}
                            scrollEnabled={true}
                            horizontal={true}
                            data={types}
                            renderItem={renderTypes} 
                        /> 

                        <View style={sectionStyles.wrapper}>
                            <Text label={'Recommended for You'} type={'bold'} style={sectionStyles.title}/>
                            <View style={sectionStyles.content}>
                                <PostGrid data={posts} onPress={(post: any, index: any) => navigate('Post', post) }/>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Category;
