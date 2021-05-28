import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

// Components
import Text from '../text';

// Lodash
import isUndefined from 'lodash/isUndefined';

// Global Styles
import { align, flex, shadow } from '../../styles/global.styles';

export const styles = StyleSheet.create({
    field: {
        ...flex.column,
        width: '100%',
        // height: 80,
        marginBottom: 15,
    },
    wrapper: {
        // ...shadow.card,
        // paddingTop: 5,
        // borderRadius: 10,
        // backgroundColor: '#FFFFFF',
    },
    row: {
        ...flex.row,
        marginBottom: 12
    },
    date: {
        backgroundColor: '#FFFFFF',
        borderWidth: 0
    },
    label: {
        fontSize: 18,
        marginBottom: 8
    },
    select: {
        width: '100%',
        // borderWidth: 1,
        // borderColor: 'red',
        ...shadow.card,
        backgroundColor: '#FFFFFF',
        marginBottom: 12

    },
    item: {
        backgroundColor: '#FFFFFF',
    }
});

const propTypes = {
    label: PropTypes.string,
    enabled: PropTypes.bool,

    // Data
    region: PropTypes.array,
    province: PropTypes.array,
    city: PropTypes.array,
    barangay: PropTypes.array,

    // Selected Index
    regionSelectedIndex: PropTypes.any,
    provinceSelectedIndex: PropTypes.any,
    citySelectedIndex: PropTypes.any,
    barangaySelectedIndex: PropTypes.any,

    // Actions
    regionOnSelect: PropTypes.func,
    provinceOnSelect: PropTypes.func,
    cityOnSelect: PropTypes.func,
    barangayOnSelect: PropTypes.func,

    // Value
    regionValue: PropTypes.string,
    provinceValue: PropTypes.string,
    cityValue: PropTypes.string,
    barangayValue: PropTypes.string,
    
};

const defaultProps = {
    label: '',
    placeholder: '',
    enabled: false,

    // Data
    region: [],
    province: [],
    city: [],
    barangay: [],

    // Indexes
    regionSelectedIndex: null,
    provinceSelectedIndex: null,
    citySelectedIndex: null,
    barangaySelectedIndex: null,

    // Actions
    regionOnSelect: null,
    provinceOnSelect: null,
    cityOnSelect: null,
    barangayOnSelect: null,

    // Value
    regionValue: '',
    provinceValue: '',
    cityValue: '',
    barangayValue: '',
};

const FieldAddress = (props: any) => {

    const { 
        label, 
        enabled,

        // Data
        region,
        province,
        city,
        barangay,

        // Indexes
        regionSelectedIndex,
        provinceSelectedIndex,
        citySelectedIndex,
        barangaySelectedIndex,

        // Actions
        regionOnSelect,
        provinceOnSelect,
        cityOnSelect,
        barangayOnSelect,

        // Values
        regionValue, 
        provinceValue, 
        cityValue, 
        barangayValue, 

    } = props;

    // Local States
    const [_region, _setRegion] = useState<any>('Select Region');
    const [_province, _setProvince] = useState<any>('Select Province');
    const [_city, _setCity] = useState<any>('Select City');
    const [_barangay, _setBarangay] = useState<any>('Select Barangay');

    const renderRegionItem = (data: any) => {
        return (
            <SelectItem 
                style={styles.item} 
                title={data.regDesc}
                key={data.id}
            />
        )    
    }

    const renderProvinceItem = (data: any) => {
        return (
            <SelectItem 
                style={styles.item} 
                title={data.provDesc}
                key={data.id}
            />
        )    
    }

    const renderCityItem = (data: any) => {
        return (
            <SelectItem 
                style={styles.item} 
                title={data.citymunDesc}
                key={data.id}
            />
        )    
    }

    const renderBarangayItem = (data: any) => {
        return (
            <SelectItem 
                style={styles.item} 
                title={data.brgyDesc}
                key={data.id}
            />
        )    
    }

    useEffect(() => {
        if(!isUndefined(region[regionSelectedIndex.row])) {
            _setRegion(region[regionSelectedIndex.row].regDesc);
        }
        _setProvince('Select Province');
        _setCity('Select City');
        _setBarangay('Select Barangay');
    }, [regionSelectedIndex]);

    useEffect(() => {
        if(!isUndefined(province[provinceSelectedIndex.row])) {
            _setProvince(province[provinceSelectedIndex.row].provDesc);
        }
        _setCity('Select City');
        _setBarangay('Select Barangay');
    }, [provinceSelectedIndex]);

    useEffect(() => {
        if(!isUndefined(city[citySelectedIndex.row])) {
            _setCity(city[citySelectedIndex.row].citymunDesc);
        }
        _setBarangay('Select Barangay');
    }, [citySelectedIndex]);

    useEffect(() => {
        if(!isUndefined(barangay[barangaySelectedIndex.row])) {
            _setBarangay(barangay[barangaySelectedIndex.row].brgyDesc);
        }
    }, [barangaySelectedIndex]);

    return (
        <View style={[styles.field, { opacity: enabled ? 1: 0.3 }]}>
            <Text label={label} style={styles.label} type={'semiBold'} />
            <View style={styles.wrapper}>
                <Select 
                    selectedIndex={regionSelectedIndex}
                    onSelect={regionOnSelect}
                    style={styles.select} 
                    size='medium' 
                    value={_region}
                    placeholder={'Region'}>
                    { region.map(renderRegionItem) }
                </Select>

                <Select
                    disabled={isUndefined(province)}
                    selectedIndex={provinceSelectedIndex}
                    onSelect={provinceOnSelect}
                    style={styles.select} 
                    size='medium' 
                    value={_province}
                    placeholder={'Province'}>
                    { province.map(renderProvinceItem) }
                </Select>

                <Select 
                    disabled={isUndefined(city)}
                    selectedIndex={citySelectedIndex}
                    onSelect={cityOnSelect}
                    style={styles.select} 
                    size='medium' 
                    value={_city}
                    placeholder={'City'}>
                    { city.map(renderCityItem) }
                </Select>

                <Select 
                    disabled={isUndefined(barangay)}
                    selectedIndex={barangaySelectedIndex}
                    onSelect={barangayOnSelect}
                    style={styles.select} 
                    size='medium' 
                    value={_barangay}
                    placeholder={'Barangay'}>
                    { barangay.map(renderBarangayItem) }
                </Select>


            </View>
        </View>
    )
}

FieldAddress.propTypes = propTypes;
FieldAddress.defaultProps = defaultProps;

export default FieldAddress;