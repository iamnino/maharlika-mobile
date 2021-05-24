import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Screen Styles
import styles from './styles';

// Actions
import { doLogin } from '../../actions/auth';

const Photo = (props: any) => {

    const onPressNext = () => {
        const { onLogin }: any = props;
        onLogin({ data: '' });
    }

    return (
        <SafeAreaView style={styles.safearea}>
            <StatusBar style='dark'/>
            <View style={styles.layout}>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <View style={styles.form}>
                            <View style={[styles.header, { marginBottom: 12 }]}>
                                <Text style={styles.h1}>Add more</Text>
                                <Text style={styles.h1}>photos</Text>
                            </View>
                            <Text style={styles.h2}>Give us your best shot.</Text>
                            <View style={{ marginBottom: 15 }}>
                                <View style={[styles.field, { justifyContent: 'space-between', marginBottom: 12 }]}>
                                    <View style={[styles.photo]}></View>
                                    <View style={[styles.photo]}></View>
                                    <View style={[styles.photo]}></View>
                                </View>
                                <View style={[styles.field, { justifyContent: 'space-between' }]}>
                                    <View style={[styles.photo]}></View>
                                    <View style={[styles.photo]}></View>
                                    <View style={[styles.photo]}></View>
                                </View>
                            </View>
                            <View style={styles.statement}>
                                <Text style={styles.h3}>Not sure what to upload?</Text>
                                <View style={styles.row}>
                                    <Text style={styles.h3}>Check out our</Text>
                                    <Pressable>
                                        <Text style={[styles.h3, styles.link]}> community guidelines.</Text>
                                    </Pressable>
                                </View>
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

const bindAction = (dispatch: any) => {
    return {
        onLogin: (params: any) => { 
            dispatch(doLogin(params)) 
        }
    }
}

const mapStateToProps = (state: any) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        error: state.auth.error
    };
}

export default connect(mapStateToProps, bindAction)(Photo);