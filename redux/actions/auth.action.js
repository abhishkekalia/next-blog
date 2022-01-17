export const ACCESS_TOKEN_GET = "ACCESS_TOKEN_GET";
export const RESPONSE_ACCESS_TOKEN_GET = "RESPONSE_ACCESS_TOKEN_GET";
export const AUTH_LOADING = "AUTH_LOADING";
export const AUTH_ERROR = "AUTH_ERROR";


export const getAccessToken = payload => {
    return {
        type: RESPONSE_ACCESS_TOKEN_GET,
        payload
    };
};
export const errorHandle = payload => {
    return {
        type: AUTH_ERROR,
        payload
    };
};
