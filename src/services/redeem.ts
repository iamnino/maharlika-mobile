import { header } from '../helpers/http.helper';

const RedeemServices = {
    lists: async (params: any) => {
        return header.post('/redeem/lists', params);
    },
    redeem: async (params: any) => {
        return header.get('/redeem/default', params);
    }
}

export default RedeemServices;