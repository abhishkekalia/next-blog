import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from 'redux-logger';

import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = middleware => {
  const arrMiddleware = [middleware];

  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    arrMiddleware.push(createLogger());
    return composeWithDevTools(applyMiddleware(...arrMiddleware));
  }
  return applyMiddleware(...arrMiddleware);
};

function configureStore() {
  const store = createStore(reducers, bindMiddleware(sagaMiddleware));

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(sagas);
  };

  store.runSagaTask();

  return store;
}

export default configureStore;
