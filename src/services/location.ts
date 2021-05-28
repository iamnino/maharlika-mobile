import { header } from '../helpers/http.helper';

const LocationServices = {
    region: async () => {
        return header.get('/region.php');
    },
    province: async (params: any) => {
        return header.get(`/province.php?regCode=${params.regCode}`);
    },
    city: async (params: any) => {
        return header.get(`/city.php?provCode=${params.provCode}`);
    },
    barangay: async (params: any) => {
        return header.get(`/barangay.php?cityCode=${params.citymunCode}`);
    },
}

export default LocationServices;