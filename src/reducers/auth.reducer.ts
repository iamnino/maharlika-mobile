import { 
    LOGIN, 
    LOGIN_SUCCESS, 
    LOGIN_ERROR,
    SIGNUP,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    USER_LOGOUT
} from '../constants/actions';

const INITIAL_STATE = {
    user: {},
    isLoggedIn: false,
    isSignedIn: false,
    isLoading: false,
    error: {},
    success: {},
};

export default (state = INITIAL_STATE, action: any ) => {
    switch (action.type) {
        case LOGIN:
            return { 
                ...state, 
                isLoading: true,
                error: {}
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                user: action.payload,
                error: {},
                success: {},
            };
        case LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                user: null,
                error: action.payload,
                success: {}
            };
        case SIGNUP: 
            return {
                ...state, 
                isLoading: true,
                isSignedIn: false,
                error: {}
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSignedIn: true,
                user: action.payload,
                error: {},
                success: {},
            };
        case SIGNUP_ERROR: 
            return {
                ...state,
                isLoading: false,
                isSignedIn: false,
                user: null,
                error: action.payload,
                success: {}
            };
        case USER_LOGOUT:
            return { 
                ...state, 
                isLoading: false, 
                isLoggedIn: false 
            };
        default:
            return state;
    }
}