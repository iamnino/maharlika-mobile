import { header } from '../helpers/http.helper';
import axios from 'axios';

const AuthServices = {
    signin: async (params: any) => {
        return header.post('/auth/signin.php', params);
    },
    signup: async (params: any) => {
        return header.post('/auth/signup.php', params);
    },
    signout: async (params: any) => {
        return header.post('/auth/logout.php', params);
    }
}

export default AuthServices;