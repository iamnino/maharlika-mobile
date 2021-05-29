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

    // Selector States
    const user = useSelector((state:any) => state.auth.user);

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const onPressLogout = () => {
        const { doLogout } = props;
        doLogout();
    }

    const typeHandler = (key: string) => {
        let type: string = '';
        switch (key) {
            case 'individual':
                type = 'Individual';
                break;
            case 'ngo':
                type = 'Non-Government ';
                break;
            case 'corporate':
                type = 'Business/Corporate';
                break;
            default:
                break;
        }
    }

    return (
        <SafeAreaView style={styles.safearea} edges={['top']}>
            <View style={styles.layout}>
                <Header title={'Account'} />
                <View style={styles.container}>

                    <View style={styles.card}>
                        <Text label={`Hello, ${user.name}`}  type={'semiBold'} style={styles.h1} />
                        {/* <Text label={``}  type={'semiBold'} style={styles.h2} /> */}
                    </View>

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