import { combineReducers } from 'redux';

// Reducers
import auth from "./auth.reducer";
import network from "./network.reducer";
import settings from "./settings.reducer";

const rootReducer = combineReducers({ 
    auth,
    network,
    settings
});

export default (state:any, action: any) => rootReducer(state, action);