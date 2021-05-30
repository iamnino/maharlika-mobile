import { 
    LOGIN, 
    LOGIN_SUCCESS, 
    LOGIN_ERROR,
    SIGNUP,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    USER_LOGOUT
} from '../constants/actions';

import AuthServices from '../services/auth';
import UserServices from '../services/user';

export const doLogin = (params: any) => async (dispatch: any) => {
    try {
        dispatch({ type: LOGIN });
        const res = await AuthServices.signin(params);
        const { data, results } = res.data;

        if(results){
            dispatch({ 
                type: LOGIN_SUCCESS, 
                payload: data
            });
        } else {
            dispatch({ 
                type: LOGIN_ERROR, 
                payload: { 
                    title: "Sign In",
                    message: data
                }
            });
        }

    } catch (error) {
        dispatch({ 
            type: LOGIN_ERROR, 
            payload: { 
                title: "Internal Server Error",
                message: "Something went wrong."
            }
        });
    }
};

export const doLogout = () => (dispatch: any) => {
    dispatch({ type: USER_LOGOUT });
};

export const doSignup = (params: any) => async (dispatch: any) => {
    try {
        dispatch({ type: SIGNUP });
        const { data }: any = await UserServices.create(params);
        if(data && data.result){
            dispatch({ 
                type: SIGNUP_SUCCESS, 
                payload: data.data
            });
        } else {
            dispatch({ 
                type: SIGNUP_ERROR, 
                payload: { 
                    title: "Sign Up",
                    message: data.message 
                }
            });
        }  
    } catch (error) {
        dispatch({ 
            type: LOGIN_ERROR, 
            payload: { 
                title: "Internal Server Error",
                message: "Something went wrong."
            }
        });
    }
}

export const onResetPassword = (params: any) => async (dispatch: any) => {
    // dispatch({ type: 'Action Type Here' });
}

export const resetAuth = () => async (dispatch: any) => {
    // dispatch({ type: RESET_AUTH });
}

export const setAccount = (params: any) => async (dispatch: any) => {
    // dispatch({ type: SET_LOCALE, payload: 'en' });
    // dispatch({ type: USER_LOGOUT });
}

export const onLogOut = (params: any) => async (dispatch: any) => {
    // dispatch({ type: 'Action Type Here' });
}

// Add/Update availability status of agents
export const addOrUpdateActiveUsers = (params: any) => async (dispatch: any) => {
    // dispatch({ type: 'Action Type Here' });
}

export const updateAvailabilityStatus = (params: any) => async (dispatch: any) => {
    // dispatch({ type: 'Action Type Here' });
}
