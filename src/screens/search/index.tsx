import React from 'react';
import { FlatList, Image, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

// Screen Styles
import { styles, headerStyles, sectionStyles } from './styles';

// Components
import SearchInput from '../../components/search';
import PostGrid from '../../components/post/grid';
import Text from '../../components/text';
import PostStack from '../../components/post/stack';
import { BackButton } from '../../components/buttons';

// Icons
import BackIcon from '../../components/icons/back';

// Constants
import Images from '../../constants/images';

// Dummy Data
import posts from '../../data/posts';

const popular = [
    { id: 'A2gmVRKy1Z', label: 'Makeup' },
    { id: 'wqrgReRBgk', label: 'Skin Care' },
    { id: 'gEqSGmYIcN', label: `Hair Care` },
    { id: 'NEFBJiMrJo', label: `Fragrance` },
    { id: 'htPFF50Ett', label: 'Foot, Hand & Nail Care' },
    { id: 'mp4UpT4917', label: 'Tools & Accessories' },
    { id: '9scEHQRAhz', label: 'Shave & Hair Removal' },
    { id: 'rXPFF44917', label: 'Personal Care', type: 'lists' },
    { id: 'htPFUpT4917', label: 'Oral Care' },
];

const Search = (props: any) => {
    
    const navigate = (screen: string, params: any = {}) => {
        const { navigation }: any = props;
        navigation.navigate(screen, params);
    }

    const goBack = () => {
        const { navigation }: any = props;
        navigation.goBack();
    }

    const renderItem = ({ item, index }: any) => {
        let end = {};

        if(popular.length === index + 1){
            end = { marginRight: 0 };
        }

        return (
            <View style={[{ position: 'relative', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginRight: 12, backgroundColor: '#F2F2F2', borderRadius: 30, paddingHorizontal: 12, paddingVertical: 8 }, end]}>
                <Text label={item.label} type={'medium'} style={{ fontSize: 16, textAlign: 'center', color: '#282A2B' }}/>
            </View>
        )
    }

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
                            <Image source={Images.banner_home_and_furniture} fadeDuration={1} style={styles.bannerImage}/>
                            <View style={styles.bannerWrapper}>
                                <Text label={'Tons of great deals for you'} type={'semiBold'} style={styles.bannerSubTitle}/>
                                <Text label={'Search on Maharlika'} type={'bold'} style={styles.bannerTitle}/>
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
                            data={popular}
                            renderItem={renderItem} 
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

export default Search;