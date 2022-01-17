import { put, takeLatest, select } from "redux-saga/effects";

function* login(action) {
    try {
        console.log("loginsaga", action.payload)
    } catch (e) {
    }
}

export function* authWatcher() {
    yield takeLatest(actions.ACCESS_TOKEN_GET, login);
}

