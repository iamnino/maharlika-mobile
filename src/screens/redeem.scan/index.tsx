import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BarCodeScanner, BarCodeEvent, BarCodeScannedCallback } from 'expo-barcode-scanner';

// Screen Styles
import { styles } from './styles';

// Components
import Text from '../../components/text';
import { BackButton } from '../../components/buttons';
import ButtonAction from '../../components/button/action';

// Constants
import Images from '../../constants/images';

const RedeemScan = (props: any) => {
    const { navigation, route }: any = props;
    const { params } = route;

    const [hasPermission, setHasPermission] = useState<boolean>(false);
    const [scanned, setScanned] = useState(false);   

    const navigate = (screen: string, params: any = {}) => {
        navigation.navigate(screen, params);
    }

    const goBack = () => {
        navigation.goBack();
    }

    const handleBarCodeScanned: any = ({ type, data }: any) => {
        setScanned(true);

        params.qr = data;
        params.type = type;

        navigate('Redeem', params)
      };

      useEffect(() => {
        (async () => {
            const { status }:any = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    
    if (hasPermission === null) {
    return <Text label={'Requesting for camera permission'} />;
    }
    if (hasPermission === false) {
        return <Text label={'No access to camera'} />;
    }

    return (
        <View style={styles.safearea}>
            <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
        </View>
    )
}

export default RedeemScan;
