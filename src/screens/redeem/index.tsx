import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Image, Pressable, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';
import Progress from '../../components/progress';
import Tabs from '../../components/tabs';
import { Action, BackButton } from '../../components/buttons';
import ButtonAction from '../../components/button/action';

// Constants
import Images from '../../constants/images';

const EventDetails = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    // States
    const [activeTabIndex, setActiveTabIndex] = useState('about');

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.safearea}>
            <ScrollView style={styles.layout}>
                <View style={styles.container}>

                    <View style={styles.header}>
                        <BackButton onPress={goBack} />
                    </View>

                    <View style={styles.banner}>
                        <Image source={params.image} style={styles.image} />
                        <Image source={Images.gradient_black} fadeDuration={1} style={styles.gradient}/>
                    </View>

                    <View style={[styles.wrapper, { marginBottom: 16 }]}>
                        <View style={styles.context}>
                            <View style={styles.contextInfo}>
                                <View style={styles.contextWrapper}>
                                    <Text label={params.title} 
                                        type={'semiBold'} style={styles.contextTitle}/>
                                    <View style={styles.contextMetaWrapper}>
                                        <Text label={'Provided by Save Coast Foundation'} 
                                            type={'medium'} style={styles.contextMeta}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.action}>

                        <View style={styles.card}>

                            <View style={[styles.cardRow, { marginBottom: 12 }]}>
                                <View style={styles.contextMetaWrapper}>
                                    <Text label={'Current Total Pearls'} 
                                        type={'medium'} style={styles.contextMeta}/>
                                </View>
                                <Text label={'1000'} 
                                    type={'semiBold'} style={styles.contextTitle}/>
                            </View>

                            <View style={[styles.cardRow, { marginBottom: 12 }]}>
                                <View style={styles.contextMetaWrapper}>
                                    <Text label={'Total Pearls to be redeemed'} 
                                        type={'medium'} style={styles.contextMeta}/>
                                </View>
                                <Text label={'-250'} 
                                    type={'semiBold'} 
                                    style={{...styles.contextTitle, ...{ color: '#FF3232' }}}/>
                            </View>

                            <View style={[styles.cardRow, { 
                                borderTopColor: '#00000015',
                                borderTopWidth: 1,
                                paddingTop: 12
                            }]}>
                                <View style={styles.contextMetaWrapper}>
                                    <Text label={'Remaining Pearls'} 
                                        type={'medium'} style={styles.contextMeta}/>
                                </View>
                                <Text label={'750'} 
                                    type={'semiBold'} 
                                    style={{...styles.contextTitle, ...{ color: '#16a085' }}}/>
                            </View>
                        
                        </View>

                        <ButtonAction 
                            loading={false}
                            label={'Redeem'}
                            containerStyle={{ backgroundColor: '#16a085' }}
                            onPress={null}
                        />
                        <Pressable style={styles.link} onPress={null}>
                            <Text label={'Send as Gift'} 
                                style={styles.label} type={'semiBold'} />
                        </Pressable>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default EventDetails;
