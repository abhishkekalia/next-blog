import { combineReducers } from "redux";

import translate from "./translate";
import auth from "./auth.reducers";

const rootReducer = combineReducers({
  auth,
  translate
});

export default rootReducer;
