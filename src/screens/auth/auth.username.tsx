import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Keyboard, Pressable, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Screen Styles
import styles from './styles';

const Username = (props: any) => {

    const initialValues = { username: '' };
    const validationSchema = Yup.object({ 
        username: Yup.string()
            .required('Required field.')
            .min(3, 'Nickname must be atleast 3 characters.')
    });

    const navigate = (screen: string, params: any = {}) => {
        const { navigation }: any = props;
        navigation.navigate(screen, params);
    }

    const onPressNext = (values: any, actions: any) =>{
        setTimeout(() => {
            navigate("Auth::Birth");
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
                                            <Text style={styles.h1}>nickname?</Text>
                                        </View>
                                        <Text style={styles.h2}>You won’t be able to change this later.</Text>
                                        <View style={[styles.field]}>
                                            <TextInput 
                                                onChangeText={handleChange('username')}
                                                onBlur={handleBlur('username')}
                                                style={styles.input}
                                                placeholder={'Enter your Nickname'} />
                                        </View>
                                        { errors.username &&
                                            <Text style={styles.error}>{ errors.username }</Text>
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

export default Username;