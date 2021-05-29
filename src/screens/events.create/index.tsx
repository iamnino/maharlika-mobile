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
import ButtonAction from '../../components/button/action';

// Forms
import FieldInput from '../../components/field/input';
import FieldDate from '../../components/field/date';
import FieldUpload from '../../components/field/upload';
import FieldDropdown from '../../components/field/dropdown';

// Services
import ImageServices from '../../services/image';

const EventCreate = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    // Form States
    const [name, setName] = useState<string>('');
    const [time, setTime] = useState(null);
    const [date, setDate] = useState(null);
    const [location, setLocation] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    // Local States
    const [photo, setPhoto] = useState<any>(null);
    const [imageURI, setImageURI] = useState(null);

    const onImagePick = async () => {
        const photo: any = await ImageServices.getLocalImage();
        setImageURI(photo.uri);
        setPhoto(photo);
    }

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
                            enabled={true}
                        />

                        <FieldInput 
                            value={location}
                            onInputChange={setLocation}
                            placeholder={'Location'}
                            label={'Location'}
                            numberOfLines={2}
                            inputStyle={{ minHeight: 60 }}
                            multiline={true}
                            enabled={true}
                        />

                        <FieldInput 
                            value={description}
                            onInputChange={setDescription}
                            placeholder={'Description'}
                            label={'Description'}
                            multiline={true}
                            numberOfLines={5}
                            inputStyle={{ minHeight: 100 }}
                            enabled={true}
                        />

                        <FieldUpload 
                            uri={imageURI}
                            placeholder={''}
                            onSelect={onImagePick}
                            label={'Upload Event Banner'}
                            // sub={_upload_sub}
                            enabled={true}
                        />

                        <View style={styles.action}>
                            <ButtonAction 
                                label={'Create Event'}
                                containerStyle={{ backgroundColor: '#16a085' }}
                                onPress={null}
                            />
                            <Pressable style={styles.link} onPress={null}>
                                <Text label={'Cancel'} 
                                    style={styles.label} type={'semiBold'} />
                            </Pressable>
                        </View>

                    </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EventCreate;
