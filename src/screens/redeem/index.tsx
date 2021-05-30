import React, { useRef, useEffect, useState, useCallback, Fragment } from 'react';
import { Image, Pressable, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';
import { BackButton, QRButton } from '../../components/buttons';
import ButtonAction from '../../components/button/action';

// Constants
import Images from '../../constants/images';

const Redeem = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    // States
    const [qrData, setQRData] = useState(false);

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const goBack = () => {
        navigation.goBack();
    }

    const onPressRedeem = () =>  {
        console.log('Redeem')
    }

    const onPressQR = () => {
        setQRData(true);
        // navigate('Redeem::Scan', params);
    }

    return (
        <View style={styles.safearea}>
            <ScrollView style={styles.layout}>
                <View style={styles.container}>

                    <View style={styles.header}>
                        <BackButton onPress={goBack} />
                        <QRButton onPress={onPressQR} />
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

                        { !qrData &&
                            <ButtonAction 
                                loading={false}
                                label={'Scan QR Code'}
                                containerStyle={{ backgroundColor: '#16a085' }}
                                onPress={onPressQR}
                            />
                        }

                        { qrData &&
                            <Fragment>
                                <View style={styles.card}>

                                <View style={[styles.cardRow, { marginBottom: 12, flexDirection: 'column' }]}>
                                    <View style={[styles.contextMetaWrapper, { marginBottom: 8 }]}>
                                        <Text label={'Redemption Center'} 
                                            type={'medium'} style={styles.contextMeta}/>
                                    </View>
                                    <Text label={'The Flap | SM Mall of Asia'} 
                                        type={'semiBold'} style={styles.contextTitle}/>
                                </View>

                                <View style={[styles.cardRow, { marginBottom: 12 }]}>
                                    <View style={styles.contextMetaWrapper}>
                                        <Text label={'Redemption Code'} 
                                            type={'medium'} style={styles.contextMeta}/>
                                    </View>
                                    <Text label={'QBEX1'} 
                                        type={'semiBold'} 
                                        style={{...styles.contextTitle, ...{ color: '#16a085' }}}/>
                                </View>

                                </View>

                                <ButtonAction 
                                    loading={false}
                                    label={'Redeem'}
                                    containerStyle={{ backgroundColor: '#16a085' }}
                                    onPress={onPressRedeem}
                                />
                            </Fragment>
                        }


                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default Redeem;
