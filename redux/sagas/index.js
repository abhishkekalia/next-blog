import { all } from "redux-saga/effects";

import translate from "./translate";

export default function* rootSaga() {
  yield all([translate()]);
}
