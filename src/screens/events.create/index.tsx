import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Datepicker } from '@ui-kitten/components';

import isEmpty from 'lodash/isEmpty';
import debounce from 'lodash/debounce';

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';
import Header from '../../components/navigation/header';

// Forms
import FieldInput from '../../components/field/input';
import FieldDate from '../../components/field/date';

const EventCreate = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    // States
    const [name, setName] = useState('');
    const [time, setTime] = useState(null);
    const [date, setDate] = useState(null);
    const [isDateVisible, setDateVisibility] = useState(false);
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState(
        `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
    );

    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView style={styles.layout}>
                <Header title={'Create Event'} />
                <View style={styles.container}>

                    <View style={styles.form}>

                        <FieldInput 
                            value={name}
                            onInputChange={setName}
                            placeholder={'Name'}
                            label={'Name'}
                            enabled={true}
                        />

                        <FieldDate 
                            label={'Date'}
                            placeholder={'Select Date'}
                            value={date}
                            onSelect={setDate}
                        />

                        <FieldInput 
                            value={location}
                            onInputChange={setLocation}
                            placeholder={'Location'}
                            label={'Location'}
                            multiline={true}
                        />

                        <FieldInput 
                            value={description}
                            onInputChange={setDescription}
                            placeholder={'Description'}
                            label={'Description'}
                            multiline={true}
                            numberOfLines={5}
                            inputStyle={{ minHeight: 100 }}
                        />

                    </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EventCreate;
