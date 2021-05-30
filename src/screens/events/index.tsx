import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Pressable, View } from 'react-native';
import { connect, useSelector } from 'react-redux';

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';
import Header from '../../components/navigation/header';
import CardEvent from '../../components/card/event';
import CardRedeem from '../../components/card/redeem';

// Constants
import Images from '../../constants/images';

// Utils
import { generateID } from '../../helpers/utils.helper';

const Events = (props: any) => {
    const { navigation, route, user }: any = props;
    const { params } = route;

    // States
    const [activeTabIndex, setActiveTabIndex] = useState('all');

    const [data, setData] = useState([
        { id: '1' }, 
        { id: '2' }, 
        { id: '3' }]
    );

    const [redeem, setRedeems] = useState([
        { id: generateID(), image: Images.redeem_bangles, title: 'White recycled plastic market tote.', description: '', pearl: '100 pearls'}, 
        { id: generateID(), image: Images.redeem_earing, title: 'White recycled plastic market tote.', description: '', pearl: '125 pearls'}, 
        { id: generateID(), image: Images.redeem_lace, title: 'White recycled plastic market tote.', description: '', pearl: '125 pearls'},
        { id: generateID(), image: Images.redeem_pen, title: 'White recycled plastic market tote.', description: '', pearl: '135 pearls'},
        { id: generateID(), image: Images.redeem_pot, title: 'White recycled plastic market tote.', description: '', pearl: '145 pearls'}, 
        { id: generateID(), image: Images.redeem_smile, title: 'White recycled plastic market tote.', description: '', pearl: '150 pearls'}, 
        { id: generateID(), image: Images.redeem_tote, title: 'White recycled plastic market tote.', description: '', pearl: '165 pearls'},
        { id: generateID(), image: Images.redeem_turtle, title: 'White recycled plastic market tote.', description: '', pearl: '165 pearls'},
        { id: generateID(), image: Images.redeem_bangles, title: 'White recycled plastic market tote.', description: '', pearl: '200 pearls'}, 
        { id: generateID(), image: Images.redeem_earing, title: 'White recycled plastic market tote.', description: '', pearl: '240 pearls'}, 
        { id: generateID(), image: Images.redeem_lace, title: 'White recycled plastic market tote.', description: '', pearl: '250 pearls'},
        { id: generateID(), image: Images.redeem_smile, title: 'White recycled plastic market tote.', description: '', pearl: '300 pearls'},
    ]);

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const tabs = [
        { id: '1', key: 'all', label: 'All' },
        { id: '3', key: 'upcoming', label: 'Upcoming' },
        { id: '4', key: 'completed', label: 'Completed' },
        { id: '4', key: 'host', label: 'My Events' },
        { id: '5', key: 'redeem', label: 'Redeem' },
    ]

    const isRedeemActive = () => {
        return activeTabIndex === 'redeem';
    }

    const renderItem = ({ item, index }: any) => {
        let style: any = { marginBottom: 15 };

        if(data.length === index + 1) {
            style = {} 
        }

        const onPress = () => {
            navigate('Event::Details', item);
        }

        return (
            <CardEvent 
                containerStyle={style}
                onPress={onPress}
            />
        )
    }

    const renderRedeem = ({ item, index }: any) => {
        let style: any = { marginBottom: 15 };

        if(data.length === index + 1) {
            style = {} 
        }

        const onPress = () => {
            navigate('Redeem', item);
        }

        return (
            <CardRedeem 
                data={item}
                containerStyle={style}
                onPress={onPress}
            />
        )
    }

    const onPressCreate = () => {
        navigate('Event::OnBoard');
    }

    const getRedeemLists = async () => {
        console.log('Load Redeemables');
        console.log('User', user.token);
    }

    const getEventsByFilter = async (key: string) => {
        console.log('Load Lists', key, );
        console.log('User', user.token);
    }

    useEffect(() => {
        if(isRedeemActive()){
            getRedeemLists();
        } else {
            getEventsByFilter(activeTabIndex);
        }        
    }, [activeTabIndex]);

    return (
        <SafeAreaView style={styles.safearea} edges={['top']}>
            <View style={styles.layout}>
                <Header 
                    title={'Events'} 
                    tabs={tabs}
                    activeIndex={activeTabIndex}
                    onPressCreate={onPressCreate}
                    onPressTab={setActiveTabIndex}
                />

                { !isRedeemActive() &&
                    <FlatList
                        contentContainerStyle={styles.container}
                        scrollEnabled={true}
                        data={data}
                        renderItem={renderItem}
                    />
                }

                { isRedeemActive() &&
                    <FlatList
                        numColumns={2}
                        columnWrapperStyle={{ 
                            width: '100%',  
                            justifyContent: "space-around" 
                        }}
                        contentContainerStyle={[styles.container, { 
                            paddingHorizontal: 8, 
                            paddingBottom: isRedeemActive() ? 45: 18
                        }]}
                        scrollEnabled={true}
                        data={redeem}
                        renderItem={renderRedeem}
                    />
                }
            </View>
            { isRedeemActive() &&
                <View style={styles.pointsContainer}>
                    <View style={styles.pointsWrapper}>
                        <Text label={'Redeemable Pearls'} style={styles.pointsLabel} type={'medium'} />
                        <Text label={'1000'} style={styles.points} type={'bold'} />
                    </View>
                </View>
            }
        </SafeAreaView>
    )
}

const bindAction = (dispatch: any) => {
    return {}
}

const mapStateToProps = (state: any) => {
    return {
        error: state.auth.error,
        user: state.auth.user
    };
}

export default connect(mapStateToProps, bindAction)(Events);