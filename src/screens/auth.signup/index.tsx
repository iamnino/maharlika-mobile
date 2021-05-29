import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, ScrollView } from 'react-native';
import { IndexPath } from '@ui-kitten/components';

// Lodash
import isNull from 'lodash/isNull';
import isEmpty from 'lodash/isEmpty';
import sortBy from 'lodash/sortBy';
import isUndefined from 'lodash/isUndefined';

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';
import Header from '../../components/navigation/header';
import FieldInput from '../../components/field/input';
import FieldDate from '../../components/field/date';
import FieldUpload from '../../components/field/upload';
import FieldAddress from '../../components/field/address';
import ButtonAction from '../../components/button/action';
// Services
import LocationServices from '../../services/location';
import AuthServices from '../../services/auth';
import ImageServices from '../../services/image';

// Utils
import { generateID } from '../../helpers/utils.helper';

const AuthSignUp = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    // Data
    const { type } = params;

    // Variables
    let _name = `What's your name?`;
    let _location = `Where do you live?`;
    let _upload = `Upload ID`;
    let _upload_sub = `Government valid ID like Postal ID, UMID or your Voter's ID`;

    switch (type) {
        case 'individual':
            _name = `What's your full name?`;
            _location = `Where do you live?`;
            _upload = `Upload ID`;
            _upload_sub = `Government valid ID like Postal ID, UMID or your Voter's ID.`;
            break;
        case 'ngo':
            _name = `What's your organization name?`;
            _location = `Where's your organization located?`;
            _upload = `Upload SEC`;
            _upload_sub = `SEC Certification. Make sure it's valid.`;
            break;
        case 'corporate':
            _name = `What's your business name?`;
            _location = `Where's your business located?`;
            _upload = `Upload DTI or SEC`;
            _upload_sub = `No worries! Your data will be safe and private.`;
            break;
        default:
            break;
    }

    // States
    const [isMounted, setMount ] = useState(false);
    const [loading, setLoading] = useState(false);

    // Form States
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState(null);

    // Location
    const [addressRegion, setAddressRegion] = useState(new IndexPath(0));
    const [addressProvince, setAddressProvince] = useState(new IndexPath(0));
    const [addressCity, setAddressCity] = useState(new IndexPath(0));
    const [addressBarangay, setAddressBarangay] = useState(new IndexPath(0));

    const [photo, setPhoto] = useState<any>(null);
    const [imageURI, setImageURI] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Location States
    const [region, setRegion] = useState<Array<any>>([]);
    const [province, setProvince] = useState<Array<any>>([]);
    const [city, setCity] = useState<Array<any>>([]);
    const [barangay, setBarangay] = useState<Array<any>>([]);

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const onImagePick = async () => {
        const photo: any = await ImageServices.getLocalImage();
        setImageURI(photo.uri);
        setPhoto(photo);
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
            const res = await ImageServices.upload(form);
            setLoading(false);
            navigate('Auth::SignIn', { new: true });
        } catch (error) {
            setLoading(false);
        }

    }

    const onPressNext = async () => {
        setLoading(true);

        const params = {
            name,
            birthday,
            type,
            addressRegion: region[addressRegion.row].id,
            addressProvince: province[addressProvince.row].id,
            addressCity: city[addressCity.row].id,
            addressBarangay: barangay[addressBarangay.row].id,
            email,
            password,
            confirmPassword
        }

        try {
            const res = await AuthServices.signup(params);
            const { data, results } = res.data;
            
            if(results) {
                uploadImage(data.id);
            }
        } catch (error) {
            setLoading(false);
        }
    }

    // Component will mount
    const componentWillUnmount = () => {
        setMount(false);
    }

    const componentDidMount = async () => {
        setMount(true);
        loadRegion();
    }

    // API Services
    const loadRegion = async () => {
        try {
            const region = await LocationServices.region();
            setRegion(sortBy(region.data, ['regDesc']));
        } catch (error) {
            console.log(error)
        }
    }

    const loadProvince = async (params: any) => {
        try {
            const province = await LocationServices.province({
                regCode: params.regCode
            });
            setProvince(sortBy(province.data, ['provDesc']));
        } catch (error) {
            console.log(error)
        }
    }

    const loadCity = async (params: any) => {
        try {
            const city = await LocationServices.city({
                provCode: params.provCode
            });
            setCity(sortBy(city.data, ['citymunDesc']));
        } catch (error) {
            console.log(error)
        }
    }

    const loadBarangay = async (params: any) => {
        try {
            const barangay = await LocationServices.barangay({
                citymunCode: params.citymunCode
            });
            setBarangay(sortBy(barangay.data, ['brgyDesc']));
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(!isUndefined(region[addressRegion.row])) {
            loadProvince(region[addressRegion.row])
        }

        if(!isUndefined(province[addressProvince.row])) {
            loadCity(province[addressProvince.row])
        }

        if(!isUndefined(city[addressCity.row])) {
            loadBarangay(city[addressCity.row])
        }

    }, [ addressRegion, addressProvince, addressCity, addressBarangay ])

    // Life Cycle Handler | Did Mount and Did Unmount
    useEffect(() => {
        componentDidMount();
        return componentWillUnmount;
    }, [])

    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView style={styles.layout}>
                <Header title={'Sign Up'} />
                <View style={styles.container}>
                    <View style={styles.form}>

                        <FieldInput 
                            value={name}
                            onInputChange={setName}
                            placeholder={''}
                            label={_name}
                            enabled={true}
                        />

                        {   type === 'individual' &&
                            <FieldDate 
                                value={birthday}
                                onSelect={setBirthday}
                                placeholder={''}
                                label={`When's your birthday?`}
                                enabled={true}
                            />
                        }

                        <FieldAddress 
                            label={_location}
                            enabled={true}
                            
                            // Data
                            region={region}
                            province={province}
                            city={city}
                            barangay={barangay}

                            // Indexes
                            regionSelectedIndex={addressRegion}
                            provinceSelectedIndex={addressProvince}
                            citySelectedIndex={addressCity}
                            barangaySelectedIndex={addressBarangay}

                            // Actions
                            regionOnSelect={setAddressRegion}
                            provinceOnSelect={setAddressProvince}
                            cityOnSelect={setAddressCity}
                            barangayOnSelect={setAddressBarangay}
                        />

                        <FieldUpload 
                            uri={imageURI}
                            placeholder={''}
                            label={_upload}
                            onSelect={onImagePick}
                            sub={_upload_sub}
                            enabled={true}
                        />

                        <View style={styles.divider} />

                        <FieldInput 
                            value={email}
                            onInputChange={setEmail}
                            placeholder={''}
                            label={'Email'}
                            enabled={true}
                        />

                        <FieldInput 
                            value={password}
                            onInputChange={setPassword}
                            placeholder={''}
                            label={'Password'}
                            enabled={true}
                            secure={true}
                        />

                        <FieldInput 
                            value={confirmPassword}
                            onInputChange={setConfirmPassword}
                            placeholder={''}
                            label={'Confirm Password'}
                            enabled={true}
                            secure={true}
                        />

                    </View>

                    <View style={styles.action}>
                        <ButtonAction 
                            loading={loading}
                            label={'Next'}
                            labelStyle={{ marginRight: 15 }}
                            containerStyle={{ backgroundColor: '#16a085' }}
                            onPress={loading ? null : onPressNext}
                        />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default AuthSignUp;
