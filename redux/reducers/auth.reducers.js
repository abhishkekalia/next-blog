import {
    RESPONSE_ACCESS_TOKEN_GET,
    AUTH_LOADING,
    AUTH_ERROR
} from "../actions/auth.action";

const INITIAL_STATE = {
    loading: false,
    authResponse: null,
    error: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RESPONSE_ACCESS_TOKEN_GET:
            return {
                ...state,
                authResponse: action.payload
            }
        case AUTH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case AUTH_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};