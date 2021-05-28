import { header } from '../helpers/http.helper';

const AuthServices = {
    signin: async (params: any) => {
        return header.post('/auth/signin.php', params);
    },
    signup: async (params: any) => {
        return header.post('/auth/signup.php', params);
    },
    signout: async (params: any) => {
        return header.post('/auth/signout.php', params);
    }
}

export default AuthServices;