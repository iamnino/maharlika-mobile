import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, View } from 'react-native';

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';
import Header from '../../components/navigation/header';
import FieldInput from '../../components/field/input';
import ButtonAction from '../../components/button/action';

// Services
import AuthServices from '../../services/auth';

const AuthSignIn = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    // States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Local States
    const [loading, setLoading] = useState(false);

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const onPressSignIn = async () => {
        setLoading(true);

        const params = {
            email,
            password
        }

        try {
            const res = await AuthServices.signin(params);
            const { data, results } = res.data;
            
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }

    }
    
    const onPressCreateAccount = () => {
        navigate('Auth::OnBoard')
    }

    return (
        <SafeAreaView style={styles.safearea} edges={['top']}>
            <View style={styles.layout}>
                <View style={styles.container}>
                    <View style={styles.form}>

                        <Header title={'Sign In'} />

                        <View style={styles.wrapper}>

                            <FieldInput 
                                value={email}
                                onInputChange={setEmail}
                                label={'Email Address'}
                                enabled={true}
                            />

                            <FieldInput 
                                value={password}
                                onInputChange={setPassword}
                                label={'Password'}
                                secure={true}
                                enabled={true}
                            />

                            <View style={styles.action}>
                                <ButtonAction 
                                    loading={loading}
                                    label={'Sign In'}
                                    containerStyle={{ backgroundColor: '#16a085' }}
                                    onPress={loading ? null : onPressSignIn}
                                />
                                <Pressable style={styles.link} onPress={onPressCreateAccount}>
                                    <Text label={'Create Account'} 
                                        style={styles.label} type={'semiBold'} />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AuthSignIn;
