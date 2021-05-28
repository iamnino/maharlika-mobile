import { header } from '../helpers/http.helper';
import axios from 'axios';

const AuthServices = {
    signin: async (params: any) => {
        return header.post('/auth/signin.php', params);
    },
    signup: async (params: any) => {
        console.log(params);

        // return header.post('/auth/signup.php', params);

        // return axios({
        //     method: 'POST',
        //     url: `${process.env.API_URL}/auth/signup.php`,
        //     headers: {
        //         'Content-Type' :'multipart/form-data'
        //     },
        //     data: params
        // })

    },
    signout: async (params: any) => {
        return header.post('/auth/logout.php', params);
    }
}

export default AuthServices;