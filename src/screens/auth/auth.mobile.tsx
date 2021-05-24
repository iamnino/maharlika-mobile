import React from 'react';
import { Keyboard, Pressable, View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Screen Styles
import styles from './styles';

const Mobile = (props: any) => {
    const mobilePattern = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const initialValues = { mobile: '' };
    const validationSchema = Yup.object({ 
        mobile: Yup.string()
            .required('Required field.')
            .matches(mobilePattern, 'Mobile Number is invalid.')
            .min(11, 'Must be 11-digit number.')
    });

    const navigate = (screen: string, params: any = {}) => {
        const { navigation }: any = props;
        navigation.navigate(screen, params);
    }

    const onPressNext = (values: any, actions: any) => {
        setTimeout(() => {
            navigate("Auth::Code");
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
                                            <Text style={styles.h1}>What’s your</Text>
                                            <Text style={styles.h1}>mobile number?</Text>
                                        </View>
                                        <Text style={styles.h2}>You won’t be able to change this later.</Text>
                                        <View style={styles.field}>
                                            <TextInput 
                                                style={[styles.input, { maxWidth: 70, marginRight: 15 }]} 
                                                placeholder={''}
                                                value={'+63'} />
                                            <TextInput 
                                                onChangeText={handleChange('mobile')}
                                                onBlur={handleBlur('mobile')}
                                                style={styles.input}
                                                maxLength={11}
                                                keyboardType={'number-pad'}
                                                placeholder={'Enter your mobile number'} />
                                        </View>
                                        { errors.mobile &&
                                            <Text style={styles.error}>{ errors.mobile }</Text>
                                        }
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

export default Mobile;