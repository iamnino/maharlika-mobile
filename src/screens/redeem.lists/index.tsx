import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Image, Pressable, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';
import { BackButton } from '../../components/buttons';
import ButtonAction from '../../components/button/action';

// Constants
import Images from '../../constants/images';

const RedeemScan = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

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

                    
                </View>
            </ScrollView>
        </View>
    )
}

export default RedeemScan;
