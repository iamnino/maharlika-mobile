import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, View } from 'react-native';
import { connect, useSelector } from 'react-redux';

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';
import Header from '../../components/navigation/header';
import FieldInput from '../../components/field/input';
import ButtonAction from '../../components/button/action';

// Services
import AuthServices from '../../services/auth';

// Actions
import { doLogin } from '../../actions/auth';

const AuthSignIn = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    console.log(params);

    // States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Local States
    const [loading, setLoading] = useState(false);

    // Selector States
    const isLoading = useSelector((state:any) => state.auth.isLoading);

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const onPressSignIn = async () => {
        const { onLogin } = props;
        onLogin({
            email: email,
            password: password
        });
    }
    
    const onPressCreateAccount = () => {
        navigate('Auth::OnBoard')
    }

    useEffect(() => {
        console.log('Change in Props', isLoading)
    }, [isLoading]);

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
                                    loading={isLoading}
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

const bindAction = (dispatch: any) => {
    return {
        onLogin: (params: any) => { 
            dispatch(doLogin(params)) 
        },
    }
}

const mapStateToProps = (state: any) => {
    return {
        error: state.auth.error
    };
}

export default connect(mapStateToProps, bindAction)(AuthSignIn);