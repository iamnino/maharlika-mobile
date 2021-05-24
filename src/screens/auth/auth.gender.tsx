import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Screen Styles
import styles from './styles';

const Gender = (props: any) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const navigate = (screen: string, params: any = {}) => {
        const { navigation }: any = props;
        navigation.navigate(screen, params);
    }

    const onPressNext = () => {
        navigate("Auth::Photo");
    }

    const lists: Array<any> = [
        { key: 'woman', label: 'Woman' },
        { key: 'man', label: 'Man' },
        { key: 'non-binary', label: 'Non-binary' }
    ];

    const gender: any = lists.map((info: any) => {
        return (
            <Pressable 
                style={[styles.option, { marginBottom: 15 }]}
                onPress={() => setSelectedIndex(info.key)}
                key={`gender-${info.key}`}>
                <Text style={styles.optionLabel}>{info.label}</Text>
                <View style={styles.optionIndicator}>
                    { selectedIndex === info.key &&
                        <View style={styles.optionIndicatorActive} />
                    }
                </View>
            </Pressable>
        )
    });

    return (
        <SafeAreaView style={styles.safearea}>
            <StatusBar style='dark'/>
            <View style={styles.layout}>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <View style={styles.form}>
                            <View style={[styles.header, { marginBottom: 12 }]}>
                                <Text style={styles.h1}>How do you</Text>
                                <Text style={styles.h1}>identify?</Text>
                            </View>
                            <Text style={styles.h2}>We loved you to be part of us.</Text>
                            <View style={[styles.field, { flexDirection: 'column' }]}>
                                { gender }
                                <Pressable 
                                    style={styles.optionMore}
                                    onPress={() => { console.log('Pressed More Options') }}>
                                    <Text style={styles.optionMoreLabel}>More gender options</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.wrapper, styles.action]}>
                    <Pressable style={styles.actionButton} 
                        onPress={onPressNext}>
                        <Text style={styles.actionLabel}>Next</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Gender;