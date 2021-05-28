import { header } from '../helpers/http.helper';

const LocationServices = {
    region: async () => {
        return header.post('/region.php');
    },
    province: async (params: any) => {
        return header.post('/province.php', params);
    },
    city: async (params: any) => {
        return header.post('/city.php', params);
    },
    barangay: async (params: any) => {
        return header.post('/barangay.php', params);
    },
}

// https://syrichta.com/maharlika/api/province.php?regCode=01
// https://syrichta.com/maharlika/api/city.php?provCode=0128

export default LocationServices;