import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Pressable, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IndexPath } from '@ui-kitten/components';
import moment from 'moment';
import { connect, useSelector } from 'react-redux';

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
import FieldPicker from '../../components/field/picker';
import FieldUpload from '../../components/field/upload';
import FieldDropdown from '../../components/field/dropdown';

// Services
import ImageServices from '../../services/image';
import EventServices from '../../services/event';

// Utils
import { generateID } from '../../helpers/utils.helper';

const EventCreate = (props: any) => {
    const { navigation, route, user }: any = props;
    const { params } = route;

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    // Form States
    const [name, setName] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const [capacity, setCapacity] = useState(null);
    const [scope, setScope] = useState(new IndexPath(0));
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [location, setLocation] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    // Local States
    const [photo, setPhoto] = useState<any>(null);
    const [imageURI, setImageURI] = useState(null);
    const [loading, setLoading] = useState<boolean>(false);

    const scopes = [
        { id: generateID(), title: 'National', scope: 'national' },
        { id: generateID(), title: 'Provincial', scope: 'provincial' },
        { id: generateID(), title: 'City', scope: 'city' },
        { id: generateID(), title: 'Barangay', scope: 'barangay' }
    ]

    const onImagePick = async () => {
        const photo: any = await ImageServices.getLocalImage();
        setImageURI(photo.uri);
        setPhoto(photo);
    }

    const onPressCreate = async () => {
        setLoading(true);

        const form = {
            name,
            link,
            scope: scopes[scope.row].scope,
            capacity,
            start,
            end,
            location,
            description,
            type: params.type,
            userId: user.id,
            token: user.token
        }

        try {
            const res = await EventServices.create(form);
            const { data, results } = res.data;
            if(results) {
                uploadImage(data.id);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }


    const uploadImage = async (id: any) => {
        setLoading(true);

        const source = { 
            uri: photo.uri, 
            type: photo.type,
            name: id
        };

        const form = new FormData();
        form.append("form", JSON.parse(JSON.stringify(source)));

        try {
            const res = await ImageServices.uploadEventCover(form);
            const { data, result } = res.data;
            if(result) {
                navigate('Events');
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    const goBack = () => {
        navigation.goBack();
    }

    const isWebinar = () => {
        return params.type === 'webinar';
    }

    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView style={styles.layout}>
                <Header title={'Create Event'} />
                <View style={styles.container}>

                    <View style={styles.form}>

                        <FieldDropdown
                            data={scopes} 
                            value={scope}
                            onSelect={setScope}
                            label={'Scope'}
                            enabled={true}
                        />

                        <FieldInput 
                            value={name}
                            onInputChange={setName}
                            // placeholder={'Name'}
                            label={'Name'}
                            enabled={true}
                        />

                        <FieldInput 
                            value={description}
                            onInputChange={setDescription}
                            // placeholder={'Description'}
                            label={'Description'}
                            multiline={true}
                            numberOfLines={5}
                            inputStyle={{ minHeight: 100 }}
                            enabled={true}
                        />

                        { isWebinar() &&
                            <FieldInput 
                                value={link}
                                onInputChange={setLink}
                                placeholder={'i.e https://zoom.us/j/93755886815'}
                                label={'Link'}
                                enabled={true}
                            />
                        }

                        <FieldInput 
                            value={capacity}
                            onInputChange={setCapacity}
                            placeholder={'Leave it blank for unlimited slots'}
                            label={'Capacity'}
                            enabled={true}
                            keyboard={'number-pad'}
                        />

                        <FieldPicker 
                            label={'Start'}
                            value={start}
                            onSelect={(date: any) => setStart(moment(date).format('lll'))}
                            enabled={true}
                            minDate={new Date()}
                        />

                        <FieldPicker 
                            label={'End'}
                            value={end}
                            onSelect={(date: any) => setEnd(moment(date).format('lll'))}
                            enabled={true}
                        />

                        { !isWebinar() &&
                            <FieldInput 
                                value={location}
                                onInputChange={setLocation}
                                // placeholder={'Location'}
                                label={'Location'}
                                numberOfLines={2}
                                inputStyle={{ minHeight: 60 }}
                                multiline={true}
                                enabled={true}
                            />
                        }

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
                                loading={loading}
                                label={'Create Event'}
                                containerStyle={{ backgroundColor: '#16a085' }}
                                onPress={onPressCreate}
                            />
                            <Pressable style={styles.link} onPress={goBack}>
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

const bindAction = (dispatch: any) => {
    return {}
}

const mapStateToProps = (state: any) => {
    return {
        error: state.auth.error,
        user: state.auth.user
    };
}

export default connect(mapStateToProps, bindAction)(EventCreate);