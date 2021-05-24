import React, { useRef, useEffect, useState, useCallback } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { Pressable, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';

const CategoryLists = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.layout}>
                <Text label={'Category Lists View'} />
            </View>
        </SafeAreaView>
    )
}

export default CategoryLists;