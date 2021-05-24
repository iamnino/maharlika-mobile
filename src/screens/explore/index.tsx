import React, { useEffect, useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

// Screen Styles
import styles, { sectionStyles, categoryStyles } from './styles';

// Components
import HeaderNavigation from '../../components/navigation/header';
import Text from '../../components/text';
import PostGrid from '../../components/post/grid';
import Filter from '../../components/filter';

// Icons
import BooksIcon from '../../components/icons/books';
import CarWashIcon from '../../components/icons/car-wash';
import EllipsisHorizontalIcon from '../../components/icons/ellipsis-horizontal';
import LampIcon from '../../components/icons/lamp';
import LotionIcon from '../../components/icons/lotion';
import PhoneVibrateIcon from '../../components/icons/phone-vibrate';
import ShoppingBagIcon from '../../components/icons/shopping-bag';
import WalletIcon from '../../components/icons/wallet';

// Constants
import Images from '../../constants/images';

// Dummy Data
import posts from '../../data/posts';

const categories: Array<any> = [
    { id: 'A2gmVRKy1Z', label: 'Health & Beauty', icon: 'lotion', gradient: ['#40C042', '#7DE4A8'], banner: Images.banner_health_and_beauty },
    { id: 'wqrgReRBgk', label: 'Babies & Kids', icon: 'books', gradient: ['#0CA7DF', '#22CCD4'], banner: Images.banner_babies_and_kids },
    { id: 'gEqSGmYIcN', label: `Men's Fashion`, icon: 'wallet', gradient: ['#4B78FC', '#44B1FE'], banner: Images.banner_men_fashion },
    { id: 'NEFBJiMrJo', label: `Women's Fashion`, icon: 'shopping-bag', gradient: ['#FF336C', '#FD7B45'], banner: Images.banner_women_fashion },
    { id: 'htPFF50Ett', label: 'Home & Furniture', icon: 'lamp', gradient: ['#FF4425', '#FE7030'], banner: Images.banner_home_and_furniture },
    { id: 'mp4UpT4917', label: 'Travel Essentials', icon: 'car-wash', gradient: ['#367BFF', '#71B3FF'], banner: Images.banner_travel_essentials },
    { id: '9scEHQRAhz', label: 'Computer & Electronics', icon: 'phone-vibrate', gradient: ['#926AF8', '#E07BFF'], banner: Images.banner_computers_and_electronics },
    { id: 'rXPFF44917', label: 'More...', icon: 'ellipsis-horizontal', type: 'lists', gradient: ['#FA6400', '#FD9D00'], banner: Images.banner_babies_and_kids },
];

const CategoryIcon = (props: any) => {
    const DIMENSION = 26;
    let icon: any = null;

    switch (props.type) {
        case 'lotion':
            icon = <LotionIcon color={'#FFF'} width={DIMENSION} height={DIMENSION}/>;
            break;
        case 'books':
            icon = <BooksIcon color={'#FFF'} width={DIMENSION} height={DIMENSION}/>;
            break;
        case 'wallet':
            icon = <WalletIcon color={'#FFF'} width={DIMENSION} height={DIMENSION}/>;
            break;
        case 'shopping-bag':
            icon = <ShoppingBagIcon color={'#FFF'} width={DIMENSION} height={DIMENSION}/>;
            break;
        case 'lamp':
            icon = <LampIcon color={'#FFF'} width={DIMENSION} height={DIMENSION}/>;
            break;
        case 'car-wash':
            icon = <CarWashIcon color={'#FFF'} width={DIMENSION} height={DIMENSION}/>;
            break;
        case 'phone-vibrate':
            icon = <PhoneVibrateIcon color={'#FFF'} width={DIMENSION} height={DIMENSION}/>;
            break;
        case 'ellipsis-horizontal':
            icon = <EllipsisHorizontalIcon color={'#FFF'} width={DIMENSION} height={DIMENSION}/>;
            break;
        default:
            icon = <EllipsisHorizontalIcon color={'#FFF'} width={DIMENSION} height={DIMENSION}/>;
            break;
    }

    return icon;
}

const Explore = (props: any) => {
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

    const onPressCategory = (params: any = {}) => {
        if (params.type === 'lists') {
            return navigate('Category::Lists', params);
        }
        return navigate('Category', params);
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
                    <HeaderNavigation title={'Explore'} search={true} 
                        onPressSearch={() => navigate('Search')} />
                    <Filter onPressFilter={() => navigate('Filter')}/>
                    
                    <View style={styles.container}>

                        <View style={styles.banner}>
                            <Image source={Images.banner_1} fadeDuration={1} style={styles.bannerImage}/>
                        </View>

                        <View style={categoryStyles.container}>
                            <View style={categoryStyles.wrapper}>
                                {
                                    categories.map((category, index) => {
                                        return (
                                            <Pressable onPress={() => onPressCategory(category)}
                                                style={categoryStyles.category} 
                                                key={`category-${category.id}`}>
                                                <LinearGradient 
                                                    colors={category.gradient}
                                                    start={{x: 1, y: 1}}
                                                    end={{x: 1, y: 0}}
                                                    style={categoryStyles.icon}>
                                                    <CategoryIcon type={category.icon}/>
                                                </LinearGradient>
                                                <Text label={category.label} type={'semiBold'} style={categoryStyles.label}/>
                                            </Pressable>
                                        )
                                    })
                                }
                            </View>
                        </View>

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

export default Explore;