import { header } from '../helpers/http.helper';
import axios from 'axios';

const AuthServices = {
    signin: async (params: any) => {
        return header.post('/auth/signin', params);
    },
    signup: async (params: any) => {
        return header.post('/auth/signup', params);
    },
    signout: async (params: any) => {
        return header.post('/auth/logout', params);
    }
}

export default AuthServices;