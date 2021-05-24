import React, { useState } from 'react';
import { Image, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

// Screen Styles
import { styles } from './styles';

// Components
import HeaderNavigation from '../../components/navigation/header';
import Text from '../../components/text';

const Create = (props: any) => {
    const navigate = (screen: string, params: any = {}) => {
        const { navigation }: any = props;
        navigation.navigate(screen, params);
    }

    const onPressAction = (params: any = {}) => {
        navigate('Create::Form', params);
    }

    const actions: Array<any> = [
        { id: 'A2gmVRKy1Z', value: '', label: 'Item for Sale' },
        { id: 'wqrgReRBgk', value: '', label: 'Vehicle for Sale or Rent' },
        { id: 'NEFBJiMrJo', value: '', label: 'Home for Sale or Rent' },
        { id: 'htPFF50Ett', value: '', label: 'Services for Hire' }
    ];

    return (
        <SafeAreaView style={styles.safearea} edges={['top']}>
            <StatusBar style='dark'/>
            <View style={styles.layout}>
                <ScrollView 
                    // stickyHeaderIndices={[0]} 
                    style={styles.scroll} 
                    bounces={false}>
                    <HeaderNavigation title={'Choose Listing Type'} />

                    <View style={styles.container}>
                        <View style={styles.wrapper}>

                            {
                                actions.map((action: any) => {
                                    const { id, label } = action;
                                    return (
                                        <Pressable onPress={() => onPressAction(action)}
                                            style={styles.action} 
                                            key={`action-${id}`}>
                                            <View style={styles.actionContent}>
                                                <View style={styles.actionImage}></View>
                                                <Text label={label} type={'medium'} style={styles.actionLabel}/>
                                            </View>
                                        </Pressable>
                                    )
                                })
                            }
                         
                        </View>
                    </View>

                </ScrollView>

               

            </View>
        </SafeAreaView>
    )
}

export default Create;