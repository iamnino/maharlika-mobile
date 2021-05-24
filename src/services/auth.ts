import { header } from '../helpers/http.helper';

const AuthServices = {
    login: async (params: any) => {
        return header.post('auth/login', params);
    },
    logout: async (params: any) => {
        return header.post('auth/logout', params);
    },
    tokenize: async (params: any) => {
        return header.post('auth/tokenize', params);
    }
}

export default AuthServices;