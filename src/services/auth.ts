import { header } from '../helpers/http.helper';

const AuthServices = {
    signin: async (params: any) => {
        return header.post('auth/signin', params);
    },
    signup: async (params: any) => {
        return header.post('auth/signup', params);
    },
    signout: async (params: any) => {
        return header.post('auth/signout', params);
    },
}

export default AuthServices;