import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, TextInput, View } from 'react-native';
import { connect, useSelector } from 'react-redux';

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';
import ButtonAction from '../../components/button/action';
import Header from '../../components/navigation/header';

// Actions
import { doLogout } from '../../actions/auth';

const Account = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const onPressLogout = () => {
        const { doLogout } = props;
        doLogout();
    }

    return (
        <SafeAreaView style={styles.safearea} edges={['top']}>
            <View style={styles.layout}>
                <Header title={'Account'} />
                <View style={styles.container}>

                    <ButtonAction 
                        // loading={loading}
                        label={'Logout'}
                        containerStyle={{ backgroundColor: '#16a085' }}
                        onPress={onPressLogout}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const bindAction = (dispatch: any) => {
    return {
        doLogout: (params: any) => { 
            dispatch(doLogout());
        }
    }
}

const mapStateToProps = (state: any) => {
    return {
        error: state.auth.error
    };
}

export default connect(mapStateToProps, bindAction)(Account);