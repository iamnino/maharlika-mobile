import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Keyboard, Pressable, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Screen Styles
import styles from './styles';

const Code = (props: any) => {
    const initialValues = { pin1: '', pin2: '', pin3: '', pin4: '' };
    const validationSchema = Yup.object({ 
        pin1: Yup.string(),
        pin2: Yup.string(),
        pin3: Yup.string(),
        pin4: Yup.string()
    });

    const navigate = (screen: string, params: any = {}) => {
        const { navigation }: any = props;
        navigation.navigate(screen, params);
    }

    const onPressNext = (values: any, actions: any) => {
        setTimeout(() => {
            navigate("Auth::Username");
            actions.setSubmitting(false);
        }, 500);
    }

    return (
        <SafeAreaView style={styles.safearea}>
            <StatusBar style='dark'/>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnBlur={true}
                onSubmit={onPressNext}>
                {({ handleChange, handleBlur, handleSubmit, values, errors, isSubmitting }: any) => 
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <View style={styles.layout}>
                            <View style={styles.container}>
                                <View style={styles.wrapper}>
                                    <View style={styles.form}>
                                        <View style={[styles.header, { marginBottom: 12 }]}>
                                            <Text style={styles.h1}>Enter</Text>
                                            <Text style={styles.h1}>Authentication PIN</Text>
                                        </View>
                                        <Text style={styles.h2}>We sent OTP on your mobile number.</Text>
                                        <View style={[styles.field, { marginBottom: 15 }]}>

                                            <TextInput 
                                                style={[styles.input, styles.code, { maxWidth: 50, marginRight: 15 }]} 
                                                placeholder={''}
                                                onChangeText={handleChange('pin1')}
                                                onBlur={handleBlur('pin1')}
                                                maxLength={1}
                                                keyboardType={'number-pad'}/>
                                            <TextInput 
                                                style={[styles.input, styles.code, { maxWidth: 50, marginRight: 15 }]} 
                                                placeholder={''}
                                                onChangeText={handleChange('pin2')}
                                                onBlur={handleBlur('pin2')}
                                                maxLength={1}
                                                keyboardType={'number-pad'}/>
                                            <TextInput 
                                                style={[styles.input, styles.code, { maxWidth: 50, marginRight: 15 }]} 
                                                placeholder={''}
                                                onChangeText={handleChange('pin3')}
                                                onBlur={handleBlur('pin3')}
                                                maxLength={1}
                                                keyboardType={'number-pad'}/>
                                            <TextInput 
                                                style={[styles.input, styles.code, { maxWidth: 50 }]} 
                                                placeholder={''}
                                                onChangeText={handleChange('pin4')}
                                                onBlur={handleBlur('pin4')}
                                                maxLength={1}
                                                keyboardType={'number-pad'}/>
                                        </View>
                                        <View style={[styles.statement]}>
                                            <Text style={styles.h3}>Unable to received the OTP from you mobile device?</Text>
                                            {/* <Pressable>
                                                <Text style={[styles.h3, styles.link, styles.emphasis]}>Click here</Text>
                                            </Pressable> */}
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.wrapper, styles.action]}>
                                <Pressable style={styles.actionButton} onPress={handleSubmit}>
                                    <Text style={styles.actionLabel}>{ isSubmitting ?  '...': 'Next'}</Text>
                                </Pressable>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                }
            </Formik>
        </SafeAreaView>
    )
}

export default Code;