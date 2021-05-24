import React, { useState } from 'react';
import { Image, View, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

// Screen Styles
import { styles, fieldStyles } from './styles';

// Components
import HeaderNavigation from '../../components/navigation/header';
import Text from '../../components/text';

const upload: Array<any> = [
    { imageId: 1 },
    { imageId: 2 },
    { imageId: 3 },
    { imageId: 4 },
    { imageId: 5 },
    { imageId: 6 }
];

const CreateForm = (props: any) => {
    const navigate = (screen: string, params: any = {}) => {
        const { navigation }: any = props;
        navigation.navigate(screen, params);
    }

    const onPressNext = () => {
        // navigate('Create::Form', {});
    }

    const categories:Array<any> = [
        { id: 'A2gmVRKy1Z', label: 'New' },
        { id: 'wqrgReRBgk', label: 'Used - Like New' },
        { id: 'NEFBJiMrJo', label: 'Used - Good' },
        { id: 'htPFF50Ett', label: 'Used - Fair' }
    ];

    return (
        <SafeAreaView style={styles.safearea}>
            <StatusBar style='dark'/>
            <View style={styles.layout}>
                <ScrollView 
                    stickyHeaderIndices={[0]} 
                    style={styles.scroll} 
                    bounces={false}>
                    <HeaderNavigation title={'Create'} />

                    <View style={styles.container}>
                        <View style={styles.wrapper}>

                            <View style={fieldStyles.container}>

                                <ScrollView horizontal={true} style={fieldStyles.scroll}>
                                    <View style={[fieldStyles.wrapper, fieldStyles.photos, fieldStyles.row]}>
                                        {
                                            upload.map((item: any, index: any) => { 
                                                const image = require(`../../../assets/images/posts/post-4.png`);
                                                
                                                let end:any = {};

                                                if(upload.length === index + 1){
                                                    end = fieldStyles.photoEnd;
                                                }

                                                return (
                                                    <View style={[fieldStyles.photoWrapper, end]} 
                                                        key={`upload-${index}-image`}>
                                                        <View style={fieldStyles.photo}>
                                                            {/* <Image source={image} 
                                                            fadeDuration={1} style={fieldStyles.image}/> */}
                                                        </View>
                                                    </View>
                                                )
                                            })
                                        }
                                    </View>
                                </ScrollView>
                                        
                                <View style={fieldStyles.row}>
                                    <Text label={'You can upload up to 6 photos'} 
                                        type={'medium'} style={fieldStyles.tag} />
                                </View>
                            </View>

                            <View style={[fieldStyles.container, fieldStyles.row]}>
                                <Text label={'Title'} type={'semiBold'} style={fieldStyles.label} />
                                <View style={fieldStyles.wrapper}>
                                    <View style={[fieldStyles.field, fieldStyles.title]}>
                                        <TextInput 
                                            style={[fieldStyles.input, fieldStyles.inputTitle]}
                                            multiline={true}
                                            placeholder={''}
                                            clearButtonMode={'while-editing'} />
                                    </View>
                                </View>
                            </View>

                            <View style={[fieldStyles.container, fieldStyles.row]}>
                                <Text label={'Price'} type={'semiBold'} style={fieldStyles.label} />
                                <View style={fieldStyles.wrapper}>
                                    <View style={[fieldStyles.field, fieldStyles.currency]}>
                                        <Text label={'PHP'} type={'semiBold'} style={fieldStyles.currencyLabel}/>
                                    </View>

                                    <View style={[fieldStyles.field, fieldStyles.price]}>
                                        <TextInput 
                                            maxLength={12}
                                            style={[fieldStyles.input, fieldStyles.inputPrice]}
                                            placeholder={'0'}
                                            clearButtonMode={'while-editing'} />
                                    </View>
                                </View>
                            </View>

                            <View style={[fieldStyles.container, fieldStyles.row]}>
                                <Text label={'Category'} type={'semiBold'} style={fieldStyles.label} />
                                <View style={fieldStyles.wrapper}>
                                    <View style={fieldStyles.field}>
                                        <TextInput 
                                            style={fieldStyles.input}
                                            placeholder={''}
                                            clearButtonMode={'while-editing'} />
                                    </View>
                                </View>
                            </View>

                            <View style={[fieldStyles.container, { marginBottom: 0 }]}>
                                <View style={fieldStyles.row}>
                                    <Text label={'Condition'} type={'semiBold'} style={fieldStyles.label} />
                                </View>
                                <ScrollView horizontal={true} style={fieldStyles.scroll}>
                                    <View style={[fieldStyles.wrapper, fieldStyles.row, { paddingBottom: 6, marginBottom: 12 }]}>
                                        {
                                            categories.map((data, index) => {
                                                return (
                                                    <Pressable style={fieldStyles.condition} key={`condition-${index}`}>
                                                        <Text label={data.label} type={'medium'} style={fieldStyles.conditionLabel}/>
                                                    </Pressable>
                                                )
                                            })
                                        }
                                    </View>
                                </ScrollView>
                            </View>

                            <View style={[fieldStyles.container, fieldStyles.row]}>
                                <Text label={'Descriptions'} type={'semiBold'} style={fieldStyles.label} />
                                <View style={fieldStyles.wrapper}>
                                    <View style={[fieldStyles.field, fieldStyles.multiline]}>
                                        <TextInput 
                                            style={[fieldStyles.input, fieldStyles.inputDescription]}
                                            multiline={true}
                                            placeholder={''}
                                            clearButtonMode={'while-editing'} />
                                    </View>
                                </View>
                            </View>

                            <View style={[fieldStyles.container, fieldStyles.row]}>
                                <Text label={'Tags'} type={'semiBold'} style={fieldStyles.label} />
                                <View style={fieldStyles.wrapper}>
                                    <View style={fieldStyles.field}>
                                        <TextInput 
                                            style={fieldStyles.input}
                                            placeholder={''}
                                            clearButtonMode={'while-editing'} />
                                    </View>
                                </View>
                            </View>

                            <View style={fieldStyles.actions}>
                                <Pressable style={[fieldStyles.action, { marginBottom: 12 }]} onPress={onPressNext}>
                                    <Text label={'Publish'} 
                                        type={'semiBold'} 
                                        style={fieldStyles.actionLabel} />
                                </Pressable>
                                <Pressable style={[fieldStyles.action, fieldStyles.actionDraft]} onPress={null}>
                                    <Text label={'Save as Draft'} 
                                        type={'semiBold'} 
                                        style={fieldStyles.actionDraftLabel} />
                                </Pressable>
                            </View>

                        </View>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default CreateForm;