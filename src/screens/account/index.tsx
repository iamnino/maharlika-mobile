import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, TextInput, View } from 'react-native';

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';
import Header from '../../components/navigation/header';

const Account = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    return (
        <SafeAreaView style={styles.safearea} edges={['top']}>
            <View style={styles.layout}>
                <Header title={'Account'} />
                <View style={styles.container}>
                    <Pressable onPress={() => navigate('Auth::OnBoard')} style={{ marginBottom: 21 }}>
                        <Text label={'On Board'} style={{ fontSize: 18 }}/>
                    </Pressable>
                    <Pressable onPress={() => navigate('Auth::SignIn')} style={{ marginBottom: 21 }}>
                        <Text label={'To Sign In'} style={{ fontSize: 18 }}/>
                    </Pressable>
                    <Pressable onPress={() => navigate('Auth::SignUp')} style={{ marginBottom: 21 }}>
                        <Text label={'To Sign Up'} style={{ fontSize: 18 }}/>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Account;
