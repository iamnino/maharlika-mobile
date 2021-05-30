import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Image, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect, useSelector } from 'react-redux';

import isEmpty from 'lodash/isEmpty';

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

// Services
import EventServices from '../../services/event';

const EventDetails = (props: any) => {
    const { navigation, route, user }: any = props;
    const { params } = route;

    // States
    const [activeTabIndex, setActiveTabIndex] = useState('about');

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const goBack = () => {
        navigation.goBack();
    }

    const tabs = [
        { id: '1', key: 'about', label: 'About' },
        { id: '2', key: 'participant', label: 'Participant' },
    ]

    const onPressJoin = async () => {
        const form = {
            userId: user.id,
            token: user.token,
            eventId: params.id
        }

        console.log(form);

        // try {
        //     const res = await EventServices.action(form);
        //     console.log(res);
        // } catch (error) {
            
        // }
    }
    
    return (
        <View style={styles.safearea}>
            <ScrollView style={styles.layout}>
                <View style={styles.container}>

                    <View style={styles.header}>
                        <BackButton onPress={goBack} />
                    </View>

                    <View style={styles.banner}>
                        <Image source={{ uri: `${process.env.API_URL}/${params.cover}`}} style={styles.image} />
                        <Image source={Images.gradient_black} fadeDuration={1} style={styles.gradient}/>
                    </View>

                    <View style={[styles.wrapper, { marginBottom: 16 }]}>
                        <View style={styles.context}>
                            <View style={styles.contextInfo}>
                                <View style={styles.avatar}/>
                                <View style={styles.contextWrapper}>
                                    <Text label={params.creator_name} 
                                        type={'semiBold'} style={styles.contextTitle}/>
                                    <View style={styles.contextMetaWrapper}>
                                        <Text label={params.start} 
                                            type={'medium'} style={styles.contextMeta}/>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.actions}>
                            <View style={styles.action}>
                                <Progress label={'65 slots left'} progress={'40%'} />
                                {/* <Action label={'Join'}/> */}
                            </View>
                        </View>
                    </View>

                    <View style={[styles.wrapper]}>
                        <Tabs 
                            data={tabs} 
                            containerStyle={styles.tabs}
                            activeIndex={activeTabIndex} 
                            onPressTab={setActiveTabIndex}
                        />
                        <View style={styles.tab}>

                            { activeTabIndex === 'about' &&
                                <View style={styles.context}>
                                    <View style={[styles.contextDescriptionWrapper, { marginBottom: 12 }]}>
                                        <Text label={params.description} 
                                            type={'medium'} style={styles.contextDescription}/>
                                    </View>

                                    <View style={[styles.contextDescriptionWrapper, { marginBottom: 12 }]}  >
                                        <Text label={'Date and Time Start'} 
                                            type={'semiBold'} style={styles.contextDescription}/>
                                        <Text label={params.start} 
                                            type={'medium'} style={styles.contextDescription}/>
                                    </View>

                                    <View style={[styles.contextDescriptionWrapper, { marginBottom: 12 }]}  >
                                        <Text label={'Date and Time End'} 
                                            type={'semiBold'} style={styles.contextDescription}/>
                                        <Text label={params.end} 
                                            type={'medium'} style={styles.contextDescription}/>
                                    </View>


                                    { !isEmpty(params.location) && 
                                        <View style={[styles.contextDescriptionWrapper, { marginBottom: 12 }]}>
                                            <Text label={'Location'} 
                                                type={'semiBold'} style={styles.contextDescription}/>
                                            <Text label={`${params.location}`} 
                                                type={'medium'} style={styles.contextDescription}/>
                                        </View>
                                    }

                                    { !isEmpty(params.link) && 
                                        <View style={[styles.contextDescriptionWrapper, { marginBottom: 12 }]}>
                                            <Text label={'Link'} 
                                                type={'semiBold'} style={styles.contextDescription}/>
                                            <Text label={`${params.link}`} 
                                                type={'medium'} style={styles.contextDescription}/>
                                        </View>
                                    }

                                </View>
                            }

                            { activeTabIndex === 'participant' &&
                                <View style={styles.context}>
                                    <View style={[styles.contextDescriptionWrapper, { marginBottom: 12 }]}  >
                                        <Text label={'No Participant Yet'} 
                                            type={'medium'} style={styles.contextDescription}/>
                                    </View>
                                </View>
                            }

                        </View>

                        {   user.id != params.creator_id &&
                            <View style={[styles.actions, { paddingBottom: 25 }]}>
                                <ButtonAction
                                    loading={false}
                                    label={'Join'}
                                    containerStyle={{ backgroundColor: '#16a085' }}
                                    onPress={onPressJoin}
                                />
                            </View>
                        }

                    </View>
                    
                </View>
            </ScrollView>
        </View>
    )
}

const bindAction = (dispatch: any) => {
    return {}
}

const mapStateToProps = (state: any) => {
    return {
        user: state.auth.user
    };
}

export default connect(mapStateToProps, bindAction)(EventDetails);
