import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';
import Header from '../../components/navigation/header';
import FieldInput from '../../components/field/input';

const AuthSignUp = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    // States
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    return (
        <SafeAreaView style={styles.safearea} edges={['top']}>
            <View style={styles.layout}>
                <Header title={'Sign Up'} />
                <View style={styles.container}>
                    <View style={styles.form}>

                        <FieldInput 
                            value={name}
                            onInputChange={setName}
                            placeholder={'Name'}
                            label={'Name'}
                            enabled={true}
                        />

                        <FieldInput 
                            value={password}
                            onInputChange={setPassword}
                            placeholder={'Passwrord'}
                            label={'Password'}
                        />

                    </View>
                    
                </View>
                
            </View>
        </SafeAreaView>
    )
}

export default AuthSignUp;
