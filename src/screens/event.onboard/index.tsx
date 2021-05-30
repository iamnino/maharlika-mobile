import React, { Fragment, useState } from 'react';
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

const EventOnBoard = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    // States
    const [selectedIndex, setIndex] = useState(null);
    const [loading, setLoading] = useState(false);
   
    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const goBack = () => {
        navigation.goBack();
    }

    const actions = [
        { id: generateID(), type: 'webinar', label: 'Webinar' },
        { id: generateID(), type: 'seminar', label: 'Seminar' },
        { id: generateID(), type: 'workshop', label: 'Workshop' },
        { id: generateID(), type: 'volunteerism', label: 'Volunteerism' },
        { id: generateID(), type: 'entertainment', label: 'Entertainment' },
    ]

    const renderActions = ({ item, index }: any) => {
        const { type, label } = item;
        const isActive: boolean = selectedIndex == type;
        return (
            <Pressable
                style={[styles.button, isActive ? styles.active: {} ]}
                onPress={() => setIndex(type)}>
                <Text 
                    label={label} 
                    style={{...styles.label, ...{ color: isActive ? '#FFFFFF': '#00000080'}}}
                    type={'medium'}
                />
            </Pressable>
        )
    }

    const onPressNext = () => {
        const data = find(actions, { type: selectedIndex });
        if(!isNull(selectedIndex)) {
            navigate('Event::Create', data);
        }
    }

    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.layout}>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <View style={styles.header}>
                            <Text label={'Create Event'} 
                                style={styles.title} 
                                type={'medium'}/>
                        </View>
                        <FlatList 
                            numColumns={2}
                            columnWrapperStyle={{ 
                                width: '100%',  
                                justifyContent: "space-around" 
                            }} 
                            contentContainerStyle={styles.form}
                            scrollEnabled={false}
                            data={actions}
                            renderItem={renderActions}
                        />
                    </View>
                </View>

                <View style={styles.action}>
                    <ButtonAction
                        loading={loading}
                        label={'Next'}
                        containerStyle={!isNull(selectedIndex) ? { backgroundColor: '#16a085' } : { } }
                        onPress={loading ? null: onPressNext}
                    />
                    <Pressable style={styles.link} onPress={goBack}>
                        <Text label={'Cancel'} 
                            style={styles.linkLabel} type={'semiBold'} />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EventOnBoard;
