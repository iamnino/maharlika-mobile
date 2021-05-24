import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActionSheetIOS, Image, Pressable, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

// Screen Styles
import styles, { actionStyle, infoStyle } from './styles';

// Components
import HeaderNavigation from '../../components/navigation/header';
import Text from '../../components/text';

// Icons
import ArchieveIcon from '../../components/icons/archieve';
import BellIcon from '../../components/icons/bell';
import ShoppingBagIcon from '../../components/icons/shopping-bag';
import StarIcon from '../../components/icons/star';
import CarWashIcon from '../../components/icons/car-wash';
import PaintRollerIcon from '../../components/icons/paint-roller';
import QRScanIcon from '../../components/icons/qr-scan';
import TagIcon from '../../components/icons/tag';

// Constants
import Images from '../../constants/images';

const Account = (props: any) => {
    const { navigation }: any = props;

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    // Component will mount
    const componentWillUnmount = () => {
    }

    const componentDidMount = () => {
    }

     // Life Cycle Handler | Did Mount and Did Unmount
    useEffect(() => {
        componentDidMount();
        return componentWillUnmount;
    }, []);

    const onPressProfile = () => {};
    const onPressListings = () => {};
    const onPressSaved = () => {};
    const onPressNotifications = () => {};
    const onPressInvite = () => {
        const handleAction = (index: any) => {
            switch (index) {
                case 0:
                    break;
                case 1:
                    break;
                default:
                    break;
            }
        };

        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ['Cancel', 'Share', 'Report'],
                destructiveButtonIndex: 2,
                cancelButtonIndex: 0,
            },
            handleAction
        );
    };
    const onPressSettings = () => {};
    const onPressLogout = () => {
        // const { onLogout }: any = props;
        // onLogout();
    };

    const actions: Array<any> = [
        { label: 'Listings', action: onPressListings },
        { label: 'Preferences', action: onPressProfile },
        { label: 'Notifications', action: onPressNotifications },
        { label: 'Settings', action: onPressSettings },
        { label: 'Sign out', action: onPressLogout }
    ];

    return (
        <SafeAreaView style={styles.safearea} edges={['top']}>
            <View style={styles.layout}>
                <ScrollView
                    stickyHeaderIndices={[0]} 
                    style={styles.scroll} 
                    bounces={false}>
                    <HeaderNavigation title={'Account'} />

                    <View style={styles.container}>

                        <View style={styles.wrapper}>
                            <View style={[styles.section, { marginBottom: 12 }]}>
                                <View style={infoStyle.container}>
                                    <View style={infoStyle.wrapper}>
                                        <View style={infoStyle.avatar}>
                                            <View style={infoStyle.avatarHighlight} />
                                            <Image source={Images.profile_7} fadeDuration={1} style={infoStyle.avatarPhoto}/>
                                        </View>
                                        <View style={infoStyle.content}>
                                            <View style={infoStyle.context}>
                                                <Text label={'Emma'} type={'bold'} style={infoStyle.name} />
                                                <View style={infoStyle.meta}>
                                                    <Text label={'#12109MEZQ'} type={'medium'} style={infoStyle.hash} />
                                                </View>
                                            </View>
                                            <Pressable style={infoStyle.actionButton}>
                                                <Text label={'Edit Profile'} type={'semiBold'} style={infoStyle.actionLabel} />
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>

                                <View style={actionStyle.container}>
                                    <View style={actionStyle.wrapper}>
                                        <Pressable style={actionStyle.action}>
                                            <StarIcon width={29} height={29} color={'#282A2B'} style={actionStyle.icon}/>
                                            <Text label={'Favourites'} type={'medium'} style={actionStyle.label} />
                                        </Pressable>
                                        <Pressable style={actionStyle.action}>
                                            <TagIcon width={29} height={29} color={'#282A2B'} style={actionStyle.icon}/>
                                            <Text label={'Following'} type={'medium'} style={actionStyle.label} />
                                        </Pressable>
                                        <Pressable style={actionStyle.action}>
                                            <ArchieveIcon width={29} height={29} color={'#282A2B'} style={actionStyle.icon}/>
                                            <Text label={'Viewed'} type={'medium'} style={actionStyle.label} />
                                        </Pressable>
                                        <Pressable style={actionStyle.action}>
                                            <QRScanIcon width={29} height={29} color={'#282A2B'} style={actionStyle.icon}/>
                                            <Text label={'Share QR'} type={'medium'} style={actionStyle.label} />
                                        </Pressable>
                                    </View>

                                    <View style={actionStyle.card}>
                                        <View style={actionStyle.cardWrapper}>
                                            <BellIcon width={21} height={21} color={'#007AFF'} style={actionStyle.cardIcon}/>
                                            <View style={actionStyle.cardBody}>
                                                <Text label={'Turn on your notifications so you won’t missed any of our surprises.'} type={'medium'} style={actionStyle.cardLabel} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.section}>
                                {
                                    actions.map((data, index) => {
                                        const { label, action }:any = data;
                                        let end:any = {};

                                        if(actions.length === index + 1){
                                            end = styles.contentEnd;
                                        }

                                        return (
                                            <Pressable style={styles.action} key={`action-${index}`} 
                                                onPress={action}>
                                                <View style={styles.icon} />
                                                <View style={[styles.content, end]}>
                                                    <Text label={label} type={'medium'} style={styles.label}/>
                                                </View>
                                            </Pressable>
                                        )
                                    })
                                }
                            </View>
                            
                            
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
};

export default Account;