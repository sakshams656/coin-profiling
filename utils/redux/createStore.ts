/* eslint-disable @typescript-eslint/no-var-requires */
import rootReducer from "@reducers/index";
import {
  applyMiddleware,
  compose as _compose,
  legacy_createStore as _createStore,
} from "redux";
import ReduxThunk from "redux-thunk";

const middlewares = [ReduxThunk];

const compose =
  process.env.NODE_ENV === "production"
    ? _compose
    : require("redux-devtools-extension").composeWithDevTools;

export default function createStore() {
  return _createStore(rootReducer, compose(applyMiddleware()));
}

export let localStore: ReturnType<typeof createStore> = createStore();

export function getOrCreateStore() {
  // Memoize store on client
  if (!localStore) {
    localStore = createStore();
  }
  return localStore;
}
