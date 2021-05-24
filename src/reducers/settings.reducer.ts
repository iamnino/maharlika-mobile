import { 
    START, 
    RESET,
    PUSH_NOTIFICATIONS
} from '../constants/actions';

const INITIAL_STATE = {
    isStarted: false,
    isReset: false,
    isEnabledPushNotification: false
};

export default (state = INITIAL_STATE, action: any ) => {
    switch (action.type) {
        case START:
            return {
                ...state,
                isStarted: true
            };
        case RESET:
            return {
                ...state,
                isStarted: false,
                isEnabledPushNotification: false
            };
        case PUSH_NOTIFICATIONS:
            return {
                ...state,
                isEnabledPushNotification: action.payload
            };
        default:
            return state;
    }
}