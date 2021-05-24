import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Facebook from 'expo-facebook';
import * as Location from 'expo-location';

// GraphQL
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS } from '../../graphql/queries';
import { AUTH_WITH_FB } from '../../graphql/mutations';

// Screen Styles
import styles from './styles';

const Intro = (props: any) => {
    const [fbAccessToken, setFbAccessToken] = useState(null);
    const  [authWithFacebook, { 
        error: authWithFBError, 
        data: authFBData,
        loading: authFBLoading
    }] = useMutation(AUTH_WITH_FB);
    // const { error, loading, data } = useQuery(GET_USERS);

    // Handle State/Props changes
    // useEffect(() => {
    //     if(data){
    //         // console.log(error, loading, data);
    //         console.log(data.getUser);
    //     }
    // }, [data])

    // 
    useEffect(() => {
        if(fbAccessToken) {
            authWithFacebook({
                variables: {
                    accessToken: fbAccessToken
                }
            });
        }
    }, [fbAccessToken]);

    useEffect(() => {
        if(authFBData){
            console.log('DATA', authFBData.authWithFacebook)
        }
    }, [authFBData]);

    useEffect(() => {
        if(authWithFBError){
            console.log('ERROR', authWithFBError)
        }
    }, [authFBData]);


    const navigate = (screen: string, params: any = {}) => {
        const { navigation }: any = props;
        navigation.navigate(screen, params);
    }

    const onPressLoginWithFacebook = async () => {
        try {
            await Facebook.initializeAsync({
                appId: "155062589538453"
            });
            const {
                type,
                token,
                expirationDate,
                permissions,
                declinedPermissions,
            }:any = await Facebook.logInWithReadPermissionsAsync({ 
                permissions: ['public_profile', 'email', 'user_gender', 'user_birthday'] 
            });

            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`)
                .then(response => response.json())
                .then(data => {
                    setFbAccessToken(token)
                    // log(data)
                    // log(token)
                // setLoggedinStatus(true);
                // this.setData(data);
                })
                .catch(e => console.log(e))
            } else {
            // type === 'cancel'
            }
        } catch ({ message }) {
                alert(`Facebook Login Error: ${message}`);
        }
    }

    const onPressLocation = async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        if(location){
            let geoCode = await Location.reverseGeocodeAsync({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            });
            console.log('Location', location);
            console.log('Reverse Geocode', geoCode);
        }
    }

    const onPressNext = () => {
        navigate("Auth::Mobile");
    }

    return (
        <SafeAreaView style={styles.safearea}>
            <StatusBar style='light'/>
            <View style={styles.layout}>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <Text style={styles.h2}>Intro Screen {fbAccessToken}</Text>
                    </View>
                </View>
                <View style={[styles.wrapper, styles.action]}>
                    <Pressable 
                        style={[styles.actionButton, { marginBottom: 15 }]}
                        onPress={onPressLoginWithFacebook}>
                        <Text style={styles.actionLabel}>Continue with Facebook</Text>
                    </Pressable>
                    <Pressable style={styles.actionButton} onPress={onPressNext}>
                        <Text style={styles.actionLabel}>Use mobile number</Text>
                    </Pressable>
                    {/* <Pressable style={[styles.actionButton, { marginTop: 15 }]} onPress={onPressLocation}>
                        <Text style={styles.actionLabel}>Location Service</Text>
                    </Pressable> */}
                </View>
            </View>
        </SafeAreaView>
    )
    
}

export default Intro;
