import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ViewPager } from '@ui-kitten/components';

// Screen Styles
import styles from './styles';

const INDEX: any = 1;
const LISTS: Array<any> = [
    { title: 'Hello' },
    { title: 'Kamusta' }
];

const OnBoarding = (props: any) => {

    const [isGetStarted, setGetStarted] = useState(false);
    const [lists, setLists] = useState(LISTS);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onScreenSwipe = (index: any) => {
        const isStarted = index === INDEX;
        setSelectedIndex(index);
        setGetStarted(isStarted);
    }

    const navigate = (screen: string, params: any = {}) => {
        const { navigation }: any = props;
        navigation.navigate(screen, params);
    }

    const onPressNext = () => {
        if(selectedIndex !== INDEX){
            setSelectedIndex(selectedIndex + 1);
        } else {
            navigate("Tab");
        }

        if(selectedIndex + 1 === INDEX) {
            setGetStarted(true);
        }
    }

    const screens: any = lists.map((info: any, index: any) => {
        return (
            <View style={styles.wrapper} key={`screen-${index}`}>
                <Text style={styles.h1}>{info.title}</Text>
            </View>
        )
    });

    return (
        <SafeAreaView style={styles.safearea}>
            <StatusBar style='light'/>
            <ViewPager 
                style={styles.layout} 
                selectedIndex={selectedIndex} 
                onSelect={onScreenSwipe}>
                { screens }
            </ViewPager>
            <View style={styles.action}>
                <Pressable onPress={onPressNext} style={styles.actionButton}>
                    <Text style={styles.actionLabel}>{ isGetStarted ? 'Get Started' : 'Next' }</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default OnBoarding;