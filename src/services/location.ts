import { header } from '../helpers/http.helper';

const LocationServices = {
    region: async () => {
        return header.get('/region');
    },
    province: async (params: any) => {
        return header.get(`/province?regCode=${params.regCode}`);
    },
    city: async (params: any) => {
        return header.get(`/city?provCode=${params.provCode}`);
    },
    barangay: async (params: any) => {
        return header.get(`/barangay?cityCode=${params.citymunCode}`);
    },
}

export default LocationServices;