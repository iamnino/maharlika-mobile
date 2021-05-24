import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

// Screen Styles
import { styles, fieldStyles } from './styles';

// Components
import HeaderNavigation from '../../components/navigation/header';
import Text from '../../components/text';

const CreatePreview = (props: any) => {
    const navigate = (screen: string, params: any = {}) => {
        const { navigation }: any = props;
        navigation.navigate(screen, params);
    }

    const onPressBack = () => {
        const { navigation }: any = props;
        navigation.goBack();
    }

    const onPressSubmit = () => {
        // navigate('CreatePreview', {});
    }

    return (
        <SafeAreaView style={styles.safearea}>
            <StatusBar style='dark'/>
            <View style={styles.layout}>
            <ScrollView 
                    stickyHeaderIndices={[0]} 
                    style={styles.scroll} 
                    bounces={false}>

                    <HeaderNavigation title={'Preview'} 
                        back={true} onPressBack={onPressBack}
                        labelStyles={{ fontSize: 24 }}/>

                    <View style={styles.container}>
                        <Text>This is Create Form Screen</Text>
                        <Pressable style={fieldStyles.next} onPress={onPressSubmit}>
                            <Text label={'Submit'} 
                                type={'semiBold'} 
                                style={fieldStyles.nextLabel} />
                        </Pressable>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default CreatePreview;