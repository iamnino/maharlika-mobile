import { OFFLINE } from '../constants/actions'

const INITIAL_STATE = {
    isOffline: false,
    isDataConnection: false,
    isWifiConnection: false
};

export default (state = INITIAL_STATE, action: any ) => {
    switch (action.type) {
        case OFFLINE:
            return state;
        default:
            return state;
    }
}