import { 
    START,
    RESET,
    PUSH_NOTIFICATIONS
} from '../constants/actions';

export const doStart = () => (dispatch: any) => {
    dispatch({ 
        type: START 
    });
};

export const doReset = () => (dispatch: any) => {
    dispatch({ 
        type: RESET
    });
};

export const doPushNotification = (params: any) => (dispatch: any) => {
    dispatch({ 
        type: PUSH_NOTIFICATIONS,
        payload: params.isEnabled
    });
};