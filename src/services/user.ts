import { header } from '../helpers/http.helper';

const UserServices = {
    create: async (params: any) => {
        return header.post('user/create', params);
    },
    info: async (params: any) => {
        return header.post(`user/info/${params.token}`);
    }
}

export default UserServices;