import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

// Screen Styles
import styles from './styles';

const Filter = (props: any) => {
    const navigate = (screen: string, params: any = {}) => {
        const { navigation }: any = props;
        navigation.navigate(screen, params);
    }

    return (
        <SafeAreaView style={styles.safearea}>
            <StatusBar style='dark'/>
            <View style={styles.layout}>
                <ScrollView style={styles.scroll} bounces={false}>
                    <View style={styles.container}>
                        <Text>This is Filter Screen</Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Filter;