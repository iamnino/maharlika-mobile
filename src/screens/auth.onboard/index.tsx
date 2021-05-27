import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Pressable, View } from 'react-native';

import find from 'lodash/find';
import isNull from 'lodash/isNull';

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';
import ButtonAction from '../../components/button/action';

// Utils
import { generateID } from '../../helpers/utils.helper';

const AuthSignUp = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    // States
    const [selectedIndex, setIndex] = useState(null);
   
    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const actions = [
        { id: generateID(), key: 'individual', label: 'An Individual' },
        { id: generateID(), key: 'ngo', label: 'Non-Government Organizations (NGO)' },
        { id: generateID(), key: 'corporate', label: 'Business/Corporate' },
    ]

    const renderActions = ({ item }: any) => {
        const { key, label } = item;
        const isActive: boolean = selectedIndex == key;
        return (
            <Pressable
                style={[styles.button, isActive ? styles.active: {} ]}
                onPress={() => setIndex(key)}>
                <Text 
                    label={label} 
                    style={{...styles.label, ...{ color: isActive ? '#FFFFFF': '#00000080'}}}
                    type={'medium'}
                />
            </Pressable>
        )
    }

    const onPressNext = () => {
        const data = find(actions, { key: selectedIndex });
        if(!isNull(selectedIndex)) {
            navigate('Auth::SignUp', data);
        }
    }

    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.layout}>
                <View style={styles.container}>
                    <View style={styles.wrapper}>

                        <View style={styles.header}>
                            <Text label={'I am...'} 
                                style={styles.title} 
                                type={'medium'}/>
                        </View>

                        <FlatList 
                            contentContainerStyle={styles.form}
                            scrollEnabled={false}
                            data={actions}
                            renderItem={renderActions}
                        />
                    </View>
                </View>

                <View style={styles.action}>
                    <ButtonAction 
                        label={'Next'}
                        containerStyle={!isNull(selectedIndex) ? { backgroundColor: '#16a085' } : { } }
                        onPress={onPressNext}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AuthSignUp;
