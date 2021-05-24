import React, { useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

// Screen Styles
import { styles } from './styles';

// Components
import HeaderNavigation from '../../components/navigation/header';
import PostStack from '../../components/post/stack';
import Filter from '../../components/filter';

// Constants
import Images from '../../constants/images';

const posts: Array<any> = [
    { id: 'A2gmVRKy1Z', photo: Images.post_1, title: 'Samsung S20 5G with FREE Samsung Earbuds', price: 'PHP 29,500', location: 'Quezon City', isSponsored: true },
    { id: 'wqrgReRBgk', photo: Images.post_2, title: 'Huawei Mate 20', price: 'PHP 10,500', location: 'Marikina City'  },
    { id: 'NEFBJiMrJo', photo: Images.post_3, title: 'iPhone 11 64GB Green', price: 'PHP 15,800', location: 'Pasig City' },
    { id: 'htPFF50Ett', photo: Images.post_4, title: 'iPhone 8 Plus 64gb Factory Unlocked', price: 'PHP 15,800', location: 'Makati City' },
    { id: '9scEHQRAhz', photo: Images.post_1, title: 'iPhone 8 Plus', price: 'PHP 13,500', location: 'Quezon City', isSponsored: true },
    { id: 'gEqSGmYIcN', photo: Images.post_2, title: 'iPhone 8 Plus', price: 'PHP 13,500', location: 'Pasig City' },
    { id: 'mp4UpT4917', photo: Images.post_3, title: 'iPhone 8 Plus + 256GB - Silver', price: 'PHP 13,500', location: 'Quezon City' },
    { id: 'rXPFF44917', photo: Images.post_4, title: 'iPhone 8 Plus Space Gray 64GB', price: 'PHP 13,500', location: 'Pasig City' },
    { id: 'kaExC33a1X', photo: Images.post_1, title: 'iPhone 12 pro max 512gb US Variant', price: 'PHP 63,990', location: 'Las Piñas', isSponsored: true },
    { id: 'QRAhz33a1X', photo: Images.post_2, title: 'iPhone 8 Plus 64GB Factory Unlocked', price: 'PHP 13,500', location: 'Parañaque City' }
];

const Nearby = (props: any) => {

    const [offset, setOffset] = useState(0);
    const [scroll, setScroll] = useState('');

    const navigate = (screen: string, params: any = {}) => {
        const { navigation }: any = props;
        navigation.navigate(screen, params);
    }

    const getScrollDirection = (event: any) => {
        const currentOffset = event.nativeEvent.contentOffset.y;
        const direction = currentOffset > offset ? 'down' : 'up';
        setOffset(currentOffset);
        setScroll(direction);
    }

    return (
        <SafeAreaView style={styles.safearea} edges={['top']}>
            <View style={styles.layout}>
                <ScrollView 
                    stickyHeaderIndices={[1]} 
                    style={styles.scroll} 
                    bounces={false}
                    onScroll={getScrollDirection}
                    scrollEventThrottle={30}>
                    <HeaderNavigation title={'Nearby'} search={true} 
                        onPressSearch={() => navigate('Search')}/>
                    <Filter onPressFilter={() => navigate('Filter')}/>
                    
                    <View style={styles.container}>
                        <PostStack data={posts} 
                            onPress={(post: any, index: any) => navigate('Post', post) }/>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Nearby;